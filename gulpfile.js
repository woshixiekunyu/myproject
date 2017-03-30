//引包
var gulp = require('gulp');
//引用插件
var sass = require('gulp-sass');

//创建任务
gulp.task('project',function(){
	gulp.src('./src/sass/*.scss')
		.pipe(sass({outputStyle:'compact'})).on('error', sass.logError)
		//输出
		.pipe(gulp.dest('./src/css/'))
})

gulp.task('watchProject',function(){
	gulp.watch('./src/sass/*.scss',['project']);
})