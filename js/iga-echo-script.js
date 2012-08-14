// iga-echo-script.js
// Contains all of IGA's implementation-specific JavaScript for Echo

var getUMGAuthPlugin;
var IGA_ECHO;

(function($) {
    function make_url_absolute(url) {
        if (url.substr(0, 7) == "http://")
            return url;
        else
            return "http://" + window.location.hostname + url;
    }

    // Returns either a Capture-enabled FormAuth plugin or an Engage-enabled FormAuth pointed at UMG's Engage instance
    getUMGAuthPlugin = function() {
        var authPlugin;
        if (typeof $.fn.enableCapture === 'function') {
            authPlugin = {
                name: "FormAuth",
                submitPermissions: "forceLogin",
                nestedPlugins: [{name: "UCIDLogin"}]
            };
        }
        else {
            authPlugin = {
                name: "FormAuth",
                identityManagerLogin: {
                    width: 420,
                    height: 260,
                    url: "http://signup.universalmusic.com/openid/embed?flags=stay_in_window,no_immediate&token_url=" + encodeURIComponent(make_url_absolute("/_global/rpx.ashx") + "?bp_channel=" + Backplane.getChannelID()) + "&bp_channel="
                },
                submitPermissions: "forceLogin"
            };
        }
        return authPlugin;
    }

    IGA_ECHO = function(echoApiKey) {
        $(".echo-submit-form").each(function() {
            var url = make_url_absolute($(this).attr("uniq"));
            new Echo.Submit({
                target: this,
                appkey: echoApiKey, 
                targetURL: url,
                plugins: [getUMGAuthPlugin(), { name: "SocialSharing" }]
            });
        });

        function commentQuery(unique) {
            return "childrenof:\"" + make_url_absolute(unique) + "\" -type:article sortOrder:reverseChronological -state:ModeratorDeleted,ModeratorFlagged,SystemFlagged,CommunityFlagged -user.state:ModeratorBanned children:0";
        }

        $(".echo-stream").each(function() {
            new Echo.Stream({
                target: this,
                appkey: echoApiKey,
                query: commentQuery($(this).attr("uniq")),
                children: {
		                    additionalItemsPerPage: 5,
		                    moreButtonSlideTimeout: 700,
		                    itemsSlideTimeout: 700
	            },
                reTag: false,
                plugins: [{
                    name: "CommunityFlag"
                }, {
                    name: "Curation"
                }, {
                    name: "Edit"
                }, {
                    name: "AvatarLink"
                }, {
                    name: "SortOrder"
                }, {
                    name: "UserBan"
                }, {
                    name: "EnhancedMetadata"
                }, {
                    name: "BlankLinks"
                }, {
                    name: "StripHTML"
                }]
            });
        });

        Echo.Muxer.setApiKey(echoApiKey);
        $(".echo-count").each(function(id) {
            var el = this;
            Echo.Muxer.add({method: "count", q: commentQuery($(el).attr("uniq"))},
                function(data) {
                    new Echo.Counter({
                        target: el,
                        appkey: echoApiKey,
                        liveUpdates: false,
                        data: data
                    });
                }
            );
        });
        Echo.Muxer.execute();

        $(".echo-river").river({ 
			appkey: echoApiKey , 
			plugins: [{
				name: "SwitchArktanImage"
			}]
		});
    }
}(jQuery));