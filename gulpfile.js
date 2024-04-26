const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const scss = gulpSass(dartSass);
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const fileinclude = require('gulp-file-include');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const changed = require('gulp-changed');
const fileSync = require('gulp-file-sync'); 

const DefaultFold = '';

const PATH = {
  ROOT: './workspace',
  HTML: './workspace/html',
  INC: './workspace/html/include',
  GUIDE: './workspace/assets/guide',
  ASSETS: {
    ROOT: './workspace/assets',
    FONTS: './workspace/assets/fonts',
    IMAGES: './workspace/assets/images',
    STYLE: './workspace/assets/style',
    SCRIPT: './workspace/assets/script',
    SCRIPTMERGE: './workspace/assets/scriptmerge',
    LIB : './workspace/assets/lib'
  }
}

const SERVER_PATH = 'C:/onsvn/2022년 온라인 청원시스템 구축/100.개인폴더/유현/0_퍼블';

const DEST_PATH = {
  HTML: `./dist/${DefaultFold}`,
  INC: `./dist/${DefaultFold}include`,
  GUIDE: `./dist/common/${DefaultFold}guide`,
  ASSETS: {
    FONTS: `./dist/common/fonts`,
    IMAGES: `./dist/common/${DefaultFold}images`,
    STYLE: `./dist/common/${DefaultFold}css`,
    SCRIPT: `./dist/common/${DefaultFold}js`,
    LIB: `./dist/common/libjs`
  }
}

const fileIncludeOpt ={
  prefix: '@@',
  basepath: '@file',
  context:{
    'webRoot' : ".",
    'htmlRoot' : '.',
    'imageRoot' : `./common/${DefaultFold}images`,
    'cssRoot': `./common/${DefaultFold}css`,
    
    'contType' : 'y',
    'contCate' : 1,
    'loginis': 'Y',
    'class': '',
    
    'cate1': '',
    'cate2': '',

    'activeStep': '',
  }
}


// 사용안하는 배열 해당 파일명만 뺄라고 한건데 잘안됨
const CMM_EXCLUDE = [
  '!'+PATH.HTML+'/화면목록.html'
];

const browsSyncOpt = {
  stream: true,
  // match: "화면목록.html"
}

gulp.task('clear', () => {
  return new Promise( resolve => {
    del.sync(['./dist/']);
    resolve();
  });
});


gulp.task('librarySync', () => {
  return new Promise( resolve => {
    fileSync(PATH.ASSETS.LIB, DEST_PATH.ASSETS.LIB, {recursive:true});

    gulp.src(PATH.ASSETS.FONTS + '/*.*')
      .pipe( browserSync.reload(browsSyncOpt) );

    resolve();
  });
});

gulp.task('script:copy', () => {
  return new Promise( resolve => {
    gulp.src([
      PATH.ASSETS.SCRIPT + '/**/*.*'
      ])
      .pipe( gulp.dest(DEST_PATH.ASSETS.SCRIPT))
      .pipe( browserSync.reload({stream:true}));
      resolve();
  });
});

gulp.task('fontsSync', () => {
  return new Promise( resolve => {
    fileSync(PATH.ASSETS.FONTS, DEST_PATH.ASSETS.FONTS, {recursive:true});

    gulp.src(PATH.ASSETS.FONTS + '/*.*')
      .pipe( browserSync.reload({stream:true}));
      
    resolve();
  });
});

gulp.task('imagesSync', () =>{
  return new Promise( resolve => {

    fileSync(PATH.ASSETS.IMAGES,DEST_PATH.ASSETS.IMAGES,{recursive:true});
    
    gulp.src(PATH.ASSETS.IMAGES + '/**/*.*')
      .pipe( browserSync.reload({stream:true}));

    resolve();
  });
});

gulp.task('nodemon:start', () => {
  return new Promise( resolve => {
    nodemon({
      script: 'app.js',
      watch: 'app'
    });
  
    resolve();
  });
});

// script merge
gulp.task('script:bulid', () => {
  return new Promise( resolve => {
    gulp.src([
        // '!' + PATH.ASSETS.SCRIPTMERGE + '/_*.js'
        PATH.ASSETS.SCRIPTMERGE + '/test.js'
      ])
      .pipe( concat('common.js') )
      .pipe( gulp.dest(DEST_PATH.ASSETS.SCRIPT) )
      // .pipe( uglify({
      //   mangle: true
      // }) )
      // .pipe( rename('common.min.js') )
      // .pipe( gulp.dest(DEST_PATH.ASSETS.SCRIPT) )
      .pipe( browserSync.reload({stream:true}));

      resolve();
  });
});

gulp.task( 'scss:compile', () => {
  return new Promise( resolve => {
    var options = {
      outputStyle: "expanded",
      // indentType: "space",
      // indentWidth: 2
    };

    gulp.src(PATH.ASSETS.STYLE + '/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(scss.sync().on('error', scss.logError))
      .pipe(scss(options))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(DEST_PATH.ASSETS.STYLE))
      .pipe(browserSync.reload({stream:true}));
    
    resolve();
  });
});

gulp.task( 'css:copy', () => {
  return new Promise( resolve => {
    gulp.src(PATH.ASSETS.STYLE + '/**/*.css')
    .pipe(gulp.dest(DEST_PATH.ASSETS.STYLE));
    resolve();
  });
});

gulp.task( 'scssguide:compile', () => {
  return new Promise( resolve => {
    var options = {
      outputStyle: "compressed",
    };

    gulp.src(PATH.HTML + '/guide/*.scss')
      .pipe(sourcemaps.init())
      .pipe(scss.sync().on('error', scss.logError))
      .pipe(scss(options))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(DEST_PATH.HTML + '/guide'))
      .pipe(browserSync.reload({stream:true}));
    
    resolve();
  });
});


//html 초기 컴파일
gulp.task('html', () => {
  return new Promise( resolve => {
    gulp.src([
        PATH.HTML + '/**/*.*',
        '!'+PATH.HTML + '/include/*.*',
        '!'+PATH.HTML + '/popupinc/*.*',
        '!'+PATH.HTML + '/fdevjs/*.*'
      ])
      .pipe(changed(DEST_PATH.HTML))
      .pipe( fileinclude(fileIncludeOpt) )
      .pipe(gulp.dest(DEST_PATH.HTML))
      resolve();
  });
});

//html  browserSync 적용 gulp watch에서 사용
gulp.task('htmlSync', () => {
  return new Promise( resolve => {
    gulp.src([
        PATH.HTML + '/**/*.*',
        '!'+PATH.HTML + '/include/*.*',
        '!'+PATH.HTML + '/popupinc/*.*',
        '!'+PATH.HTML + '/fdevjs/*.*'
      ])
      .pipe(changed(DEST_PATH.HTML))
      .pipe( fileinclude(fileIncludeOpt) )
      .pipe(gulp.dest(DEST_PATH.HTML))
      .pipe( browserSync.reload(browsSyncOpt) );
      resolve();
  });
});

// gulp.task('reload', ()=>{
//   return new Promise( resolve => {
//     gulp.src('./index.html')
//       .pipe( browserSync.reload({stream:true}) );
//     resolve();
//   });
// });

var getDir = function(pwd)
{
    return pwd.replace(/[^\/]*$/, '');
};


var getFilename = function(pwd)
{
    return pwd.replace(/\\/gi, '/');
};

gulp.task('watch', () => {
  return new Promise( resolve => {
    gulp.watch(PATH.HTML + '/**/*.*', gulp.series(['htmlSync']));

    // gulp.watch([
    //   PATH.HTML + '/**/*.*',
    //   '!'+PATH.HTML + '/include/*.*',
    //   '!'+PATH.HTML + '/popupinc/*.*',
    //   ])
    //   .on('change', function(file){
    //     var fileName = getFilename(file);
    //     var DestfilePath = 'dist/front/' + fileName.replace('workspace/html/','');
    //     console.log(DestfilePath);
    //     // gulp.src(fileName)
    //     // .pipe( fileinclude(fileIncludeOpt) )
    //     // .pipe( gulp.dest( DestfilePath ))
    //     // .pipe( browserSync.reload(browsSyncOpt) );
    //   });
    

    // 팝업
    // gulp.watch(PATH.HTML + '/**/*.*').on('change', function(file){
    //   var path = getFilename(file);
    //   var files = path.split('/').reverse();

    //   console.log(files[1]);
    //   if(files[1] != 'popupinc') return;

    //   console.log('a');

    //   gulp.src([
    //     PATH.HTML + '/popup/**.*',
    //     '!'+PATH.HTML + '/popupinc/*.*',
    //   ])
    //   .pipe( fileinclude(fileIncludeOpt) )
    //   .pipe(gulp.dest(DEST_PATH.HTML))
    //   .pipe( browserSync.reload(browsSyncOpt) );

    // });

    

    gulp.watch(PATH.ASSETS.STYLE + "/**/*.scss", gulp.series(['scss:compile']));
    gulp.watch(PATH.ASSETS.STYLE + "/**/*.css", gulp.series(['css:copy']));
    gulp.watch(PATH.HTML + '/guide/*.scss', gulp.series(['scssguide:compile']));
    gulp.watch(PATH.ASSETS.SCRIPT + "/**/*.js", gulp.series(['script:copy']));
    gulp.watch(PATH.ASSETS.LIB + "/**/*.*", gulp.series(['librarySync']));
    gulp.watch(PATH.ASSETS.IMAGES + "/**/*.*", gulp.series(['imagesSync']));
    resolve();
  });
});

gulp.task('borwserSync', () => {
  return new Promise( resolve => {
    browserSync.init({
      server: {
        baseDir: './'
      }
    }, {
      proxy: 'http://127.0.0.1:8100',
      port: 8110,
      open: false,
      notify: false,
      ghostMode: true,
    }
    );

    resolve();
  });
});

gulp.task('default', gulp.series([
  'nodemon:start',
  'imagesSync',
  'fontsSync',
  'librarySync',
  'html',
  'script:copy',
  'scss:compile',
  'css:copy',
  'scssguide:compile',
  'borwserSync', 
  'watch'
]));