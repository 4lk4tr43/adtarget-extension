//noinspection ThisExpressionReferencesGlobalObjectJS

/**
 * Created by 4lk4t on 5/5/2016.
 */

(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        '',
        'rxjs':                       '../../node_modules/rxjs',
        'angular2':                   '../../node_modules/angular2'
    };

    // packages tells the System loader how to load when no filename and/or no src
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' }
    };

    var packageNames = [
        'angular2'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    //noinspection JSUnresolvedVariable
    if (global.filterSystemConfig) {
        //noinspection JSUnresolvedFunction
        global.filterSystemConfig(config);
    }

    //noinspection JSUnresolvedVariable
    System.config(config);

})(this);

//noinspection JSUnresolvedFunction,JSUnresolvedFunction,JSUnresolvedVariable
System.import('main').catch(function(err){ console.error(err);  });

