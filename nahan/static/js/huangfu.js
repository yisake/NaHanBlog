/***
 * @author: 皇甫
 * @change: Global variable editor
 * @time: 2016.12.14
 */
window.simeditor="";

$(document).ready(function () {
	var preview,  mobileToolbar, toolbar;
	toolbar = [ 'title', 'bold', 'italic', 'underline', 'strikethrough',
	            'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|',
	            'link', 'image', 'hr', '|', 'indent', 'outdent' ];
	//根据窗口title判断在哪个页面
	if (document.title=='新建话题-儿童代言人') {//当前窗口为创建新文章时，显示Simditor编辑器
		window.simeditor = new Simditor({
			  textarea: $('#txt-content'),
			  placeholder:'这里输入内容',
			  defaultImage:'https://avatars0.githubusercontent.com/u/4221944?v=3&u=04902428fe646b5e28b628b4594ccb817c5f7363&s=400',
			  toolbar:toolbar,
			  toolbarFloat:true,
			  upload: {
				  url:'http://127.0.0.1:5000/voice/simupload/',
				  params:null,
				  connectionCount:8,
				  leaveConfirm:'正在上传文件'
			  },
			  pasteImage:true,
			  codeLanguages:[
			                 { name: 'Bash', value: 'bash' },
			                 { name: 'C++', value: 'c++' },
			                 { name: 'C#', value: 'cs' },
			                 { name: 'CSS', value: 'css' },
			                 { name: 'Erlang', value: 'erlang' },
			                 { name: 'Less', value: 'less' },
			                 { name: 'Sass', value: 'sass' },
			                 { name: 'Diff', value: 'diff' },
			                 { name: 'CoffeeScript', value: 'coffeescript' },
			                 { name: 'HTML,XML', value: 'html' },
			                 { name: 'JSON', value: 'json' },
			                 { name: 'Java', value: 'java' },
			                 { name: 'JavaScript', value: 'js' },
			                 { name: 'Markdown', value: 'markdown' },
			                 { name: 'Objective C', value: 'oc' },
			                 { name: 'PHP', value: 'php' },
			                 { name: 'Perl', value: 'parl' },
			                 { name: 'Python', value: 'python' },
			                 { name: 'Ruby', value: 'ruby' },
			                 { name: 'SQL', value: 'sql'},
			               ],
			});
		
		preview = $('#sim-txt-content');
	    if (preview.length > 0) {
	      return window.simeditor.on('valuechanged', function(e) {
	        return preview.html(window.simeditor.getValue());
	      });
	    }
	    
	} else if (document.title=='话题-儿童代言人') {
		/***
		 * @author 皇甫
		 * @change 修改原来的p元素为内容，展示为富文本
		 * @time 2016.12.14
		 * */
		$('.panel-body > p').html($('.panel-body > p').text())
		
	} else if (document.title=='编辑话题-儿童代言人') {
		window.simeditor = new Simditor({
			  textarea: $('#txt-content'),
			  placeholder:'这里输入内容',
			  defaultImage:'https://avatars0.githubusercontent.com/u/4221944?v=3&u=04902428fe646b5e28b628b4594ccb817c5f7363&s=400',
			  toolbar:toolbar,
			  toolbarFloat:true,
			  upload: {
				  url:'http://127.0.0.1:5000/voice/simupload/',
				  params:null,
				  connectionCount:8,
				  leaveConfirm:'正在上传文件'
			  },
			  pasteImage:true,
			  codeLanguages:[
			                 { name: 'Bash', value: 'bash' },
			                 { name: 'C++', value: 'c++' },
			                 { name: 'C#', value: 'cs' },
			                 { name: 'CSS', value: 'css' },
			                 { name: 'Erlang', value: 'erlang' },
			                 { name: 'Less', value: 'less' },
			                 { name: 'Sass', value: 'sass' },
			                 { name: 'Diff', value: 'diff' },
			                 { name: 'CoffeeScript', value: 'coffeescript' },
			                 { name: 'HTML,XML', value: 'html' },
			                 { name: 'JSON', value: 'json' },
			                 { name: 'Java', value: 'java' },
			                 { name: 'JavaScript', value: 'js' },
			                 { name: 'Markdown', value: 'markdown' },
			                 { name: 'Objective C', value: 'oc' },
			                 { name: 'PHP', value: 'php' },
			                 { name: 'Perl', value: 'parl' },
			                 { name: 'Python', value: 'python' },
			                 { name: 'Ruby', value: 'ruby' },
			                 { name: 'SQL', value: 'sql'},
			               ],
			});
		window.simeditor.setValue($('#content').text())
		
		preview = $('#sim-txt-content');
	    if (preview.length > 0) {
	      return window.simeditor.on('valuechanged', function(e) {
	        return preview.html(window.simeditor.getValue());
	      });
	    }		
	}
});

$(document).ready(function () {
	//设置用户列表jquery渐入渐出
	//$("div[class='panel panel-default']").slideUp("slow");
	
	//$("div[class='panel panel-default']").animate({"opacity":0.2},1000, "linear", null);
	//$("div[class='panel panel-default']").eq(0).fadeIn(2000);

	$("div[class='panel panel-default']").fadeIn(2000);
	$("#icon_block").fadeIn(2000);
	
});

$(document).ready(function () {
    var clock = $('#clock');
	//定义数字数组0-9
	var digit_to_name = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	//定义星期
	var weekday = ['周日','周一','周二','周三','周四','周五','周六'];

    var digits = {};

    //定义时分秒位置
    var positions = [
        'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
    ];

    //构建数字时钟的时分秒

    var digit_holder = clock.find('.digits');

    $.each(positions, function(){

        if(this == ':'){
            digit_holder.append('<div class="dots">');
        }
        else{

            var pos = $('<div>');

            for(var i=1; i<8; i++){
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digit_holder.append(pos);
        }

    });
	

    // 让时钟跑起来
    (function update_time(){

        //调用moment.js来格式化时间
        var now = moment().format("HHmmss");

        digits.h1.attr('class', digit_to_name[now[0]]);
        digits.h2.attr('class', digit_to_name[now[1]]);
        digits.m1.attr('class', digit_to_name[now[2]]);
        digits.m2.attr('class', digit_to_name[now[3]]);
        digits.s1.attr('class', digit_to_name[now[4]]);
        digits.s2.attr('class', digit_to_name[now[5]]);

		var date = moment().format("YYYY年MM月DD日");
		var week = weekday[moment().format('d')];
		$(".date").html(date + ' ' + week);


        // 每秒钟运行一次
        setTimeout(update_time, 1000);

    })();
});

