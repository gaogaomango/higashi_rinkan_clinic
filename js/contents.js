         function loadContents(){
            // 共通部分
            if($("#title")[0] != null){
                $("#title").load("/header.html");
            }
            if($("#clinickMap")[0] != null){
                $("#clinickMap").load("/contents_map.html")
            }
            if($("#openTime")[0] != null){
                $("#openTime").load("/open_time.html");
            }

            var $dir = location.href.split("/");
            var $dir1 = $dir[3];
            // 往診
            if($dir1 === "house_calls"){
                if($("#contentsHeader")[0] != null){
                    $("#contentsHeader").load("/house_calls/contents_header_house_calls.html");
                }
                if($("#contentsHouseCallsFeature")[0] != null){
                    $("#contentsHouseCallsFeature").load("/house_calls/clinick_feature.html");
                }
                if($("#contentsApplicationFlow")[0] != null){
                    $("#contentsApplicationFlow").load("/house_calls/contents_application_flow.html");
                }
                if($("#contentsApplication")[0] != null){
                    $("#contentsApplication").load("/house_calls/contents_application.html");
                }
                if($("#clinickAddress")[0] != null){
                    $("#clinickAddress").load("/house_calls/contents_address.html");
                }
                if($("#houseCallsArea")[0] != null){
                    $("#houseCallsArea").load("/house_calls/contents_area.html");
                }
                if($("#footer")[0] != null){
                    $("#footer").load("/house_calls/footer.html");
                }
            // 外来
            } else {
                if($("#contentsHeader")[0] != null){
                    $("#contentsHeader").load("/contents_header.html");
                }
                if($("#clinickFeature")[0] != null){
                    $("#clinickFeature").load("/clinick_feature.html");
                }
                if($("#staffIntroduction")[0] != null){
                    $("#staffIntroduction").load("/staff_introduction.html");
                }
                if($("#footer")[0] != null){
                    $("#footer").load("/footer.html");
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
            moveToId();
        });
         $(document).on('pjax:render',function(){
            loadContents();
         });
        // #で始まるアンカーをクリックした場合に処理
        function moveToId(){
           $('a[href^=#]').click(function() {
              // スクロールの速度
              var speed = 400; // ミリ秒
              // アンカーの値取得
              var href= $(this).attr("href");
              // 移動先を取得
              var target = $(href == "#" || href == "" ? 'html' : href);
              // 移動先を数値で取得
              var position = target.offset().top;
              // スムーススクロール
              $('body,html').animate({scrollTop:position}, speed, 'swing');
              return false;
           });
        }
