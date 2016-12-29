         function loadContents(){
            if($("#title")[0] != null){                    
                $("#title").load("header.html");
            }

            if($("#contentsHeader")[0] != null){
                $("#contentsHeader").load("contents_header.html");
            }
            if($("#footer")[0] != null){
                $("#footer").load("footer.html");                    
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
