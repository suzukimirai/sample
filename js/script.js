// ハンバーガーメニュー
$(function(){
    $('.menu-trigger').click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.g-navi').addClass('active');
    } else {
        $('.g-navi').removeClass('active');
    }
    });
    $('.nav-wrapper ul li a').click(function(){
        $('.menu-trigger').removeClass('active');
        $('.g-navi').removeClass('active');
    });
});

$(function () {
    function toggleChangeBtn() {
        var slideIndex = $('.staff-box').index($('.active'));// 変数slideIndexを定義 = スライドエリア（.staff-box）のなかで、.activeを含んでいるスライドのインデックス番号を取得し、変数に代入する
        $ ('.slide-button').show();
        if (slideIndex == 0) {
            $('.prev').hide();
        } else if (slideIndex == 2){
            $('.next').hide();
        }
    }
    toggleChangeBtn();
    $('.next').click(function() {
        var $displaySlide = $('.active');
        $displaySlide.removeClass('active box-design');
        $displaySlide.next().addClass('active box-design');
        toggleChangeBtn();
    });
    $('.prev').click(function() {
        var $displaySlide = $('.active');
        $displaySlide.removeClass('active box-design');
        $displaySlide.prev().addClass('active box-design');
        toggleChangeBtn();
    });
});

$(function() {
    $('.modalopen').each(function (){
        $(this).on('click',function (){
            var target = $(this).data('target');// .moddalopenのdatetargetの値を取得する。例えば変数targetにはmodal101が代入される。
            var modal = document.getElementById(target);// クリックしたライフボックスが持つdata-target属性の値と同じモーダルウィンドウのid名が含まれるドキュメント要素を取得します。
            console.log(modal);
            $(modal).fadeIn();//取得したID=modal101が現れる
            return false;
        });
    });
    $('.modalClose').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});

$(function () {
    var $filters = $('.filter [data-filter]');
    var $boxes = $('.lineup-wrapper [data-category]');

    $filters.on('click',function (e){
        e.preventDefault();
        var $this = $(this);//変数this＝ユーザーが選択した要素を代入します。今回は、 $filters.on(‘click’, function (e)〜.on の前にある「$filters」＝各メニュータブの中で選択された「data-category」が変数thisの中に代入されます。
        $filters.removeClass('active');//$filters（dataカテゴリーが付与されているすべてのタブ）からすべてクリックするたびにactiveを外す。
        $this.addClass('active');//選択中のタブにactiveを付ける
        //↑クリックした瞬間、一旦(.active)がメニュータブ全てから外れ、クリックした要素($this)に(.active)が付与される

        var $filterTime = $this.attr('data-filter');//

        if ($filterTime == 'ranking') {
            $boxes.removeClass('is-animated')
              .fadeOut().promise().done(function () {
                $boxes.addClass('is-animated').fadeIn();
              });
        } else {
            $boxes.removeClass('is-animated')
            .fadeOut().promise().done(function () {
                $boxes.filter('[data-category = "' + $filterTime + '"]')
                .addClass('is-animated').fadeIn();
            });
        }
    });
});