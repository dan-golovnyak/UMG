(function($) {

    // Start "Featured" menu item
    $('div.s_paging a.featured').click(function() {
    new Echo.Stream({
        "target": document.getElementById("echo-stream"),
        "appkey": "prod.umg",
        "query": "((childrenof:" + baseURL + "/id_Featured -state:ModeratorDeleted,SystemFlagged,CommunityFlagged,ModeratorFlagged -user.state:ModeratorBanned)) safeHTML:false children:1 -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2 itemsPerPage:8",
        "plugins": [{
            "name": "Reply",
            "actionString": "Write reply here...",
            "nestedPlugins": [{
            "name": "FormAuth"
            }]
        }]
        });
        $('div.s_paging a').removeClass('selected');
        $(this).addClass('selected');
    });

    // Start "Twitter" menu item
    $('div.s_paging a.tweets').click(function() {
    new Echo.Stream({
        "target": document.getElementById("echo-stream"),
        "appkey": "prod.umg",
        "query": "((childrenof:" + baseURL + "/id_Twitter -state:ModeratorDeleted,SystemFlagged,CommunityFlagged,ModeratorFlagged -user.state:ModeratorBanned)) safeHTML:false children:1 -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2 itemsPerPage:8",
        "plugins": [{
            "name": "Reply",
            "actionString": "Write reply here...",
            "nestedPlugins": [{
            "name": "FormAuth"
            }]
        }]
        });
        $('div.s_paging a').removeClass('selected');
        $(this).addClass('selected');
    });


    // Start "Facebook" menu item
    $('div.s_paging a.facebook').click(function() {
    new Echo.Stream({
        "target": document.getElementById("echo-stream"),
        "appkey": "prod.umg",
        "query": "((childrenof:" + baseURL + "/id_Facebook -state:ModeratorDeleted,SystemFlagged,CommunityFlagged,ModeratorFlagged -user.state:ModeratorBanned)) safeHTML:false children:1 -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2 itemsPerPage:8",
        "plugins": [{
            "name": "Reply",
            "actionString": "Write reply here...",
            "nestedPlugins": [{
            "name": "FormAuth"
            }]
        }]
        });
        $('div.s_paging a').removeClass('selected');
        $(this).addClass('selected');
    });

    // Start "Youtube" menu item
    $('div.s_paging a.youtube').click(function() {
    new Echo.Stream({
        "target": document.getElementById("echo-stream"),
        "appkey": "prod.umg",
        "query": "((childrenof:" + baseURL + "/id_Youtube -state:ModeratorDeleted,SystemFlagged,CommunityFlagged,ModeratorFlagged -user.state:ModeratorBanned)) safeHTML:false children:1 -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2 itemsPerPage:8",
        "plugins": [{
            "name": "Reply",
            "actionString": "Write reply here...",
            "nestedPlugins": [{
            "name": "FormAuth"
            }]
        }]
        });
        $('div.s_paging a').removeClass('selected');
        $(this).addClass('selected');
    });

    // Start "News" menu item
    $('div.s_paging a.news').click(function() {
    new Echo.Stream({
        "target": document.getElementById("echo-stream"),
        "appkey": "prod.umg",
        "query": "((childrenof:" + baseURL + "/id_News -state:ModeratorDeleted,SystemFlagged,CommunityFlagged,ModeratorFlagged -user.state:ModeratorBanned)) safeHTML:false children:1 -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2 itemsPerPage:8",
        "plugins": [{
            "name": "Reply",
            "actionString": "Write reply here...",
            "nestedPlugins": [{
            "name": "FormAuth"
            }]
        }]
        });
        $('div.s_paging a').removeClass('selected');
        $(this).addClass('selected');
    });
})(jQuery);
