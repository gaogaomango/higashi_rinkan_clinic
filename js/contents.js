         function loadContents(){
            var $dir = location.href.split("/");
            var $dir1 = $dir[3];
            // 往診
            if($dir1 === "house_calls"){
                if($("#title")[0] != null){    
                    $("#title").load("../header.html");
                }
                if($("#footer")[0] != null){
                    $("#footer").load("../footer.html");                    
                }
                if($("#contentsHeader")[0] != null){
                    $("#contentsHeader").load("contents_header_house_calls.html");
                }
                if($("#contentsApplicationFlow")[0] != null){
                    $("#contentsApplicationFlow").load("contents_application_flow.html");
                }
                if($("#contentsApplication")[0] != null){
                    $("#contentsApplication").load("contents_application.html");
                }
                if($("#clinickMap")[0] != null){
                    $("#clinickMap").load("../contents_map.html")
                }
                if($("#openTime")[0] != null){
                    $("#openTime").load("../open_time.html");                
                }
                if($("#clinickAddress")[0] != null){
                    $("#clinickAddress").load("contents_address.html");                
                }
            // 外来
            } else {
                if($("#title")[0] != null){                    
                    $("#title").load("header.html");
                }
                if($("#footer")[0] != null){
                    $("#footer").load("footer.html");                    
                }
                if($("#contentsHeader")[0] != null){
                    $("#contentsHeader").load("contents_header.html");
                }
                if($("#clinickFeature")[0] != null){
                    $("#clinickFeature").load("clinick_feature.html");
                }
                if($("#staffIntroduction")[0] != null){
                    $("#staffIntroduction").load("staff_introduction.html");
                }
                if($("#clinickMap")[0] != null){
                    $("#clinickMap").load("contents_map.html")
                }
                if($("#openTime")[0] != null){
                    $("#openTime").load("open_time.html");                
                }                
            }
         }
         //共通パーツ読み込み
        loadContents();
        $(function(){
            $.pjax({
                area: 'main', //入れ替える部分
                link : 'a:not([target])'
            });
        });
         $(document).on('pjax:render',function(){
            loadContents();
         });
