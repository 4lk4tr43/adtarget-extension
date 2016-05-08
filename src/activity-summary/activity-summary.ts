/**
 * Created by 4lk4t on 5/4/2016.
 */

class Application {
    constructor(polling:number) {
        this.pollStart(polling);
    }

    pollStart(polling:number) {
        var interval = setInterval(() => {
            console.log("AdTarget: Looking for CodeMirror");
            var editorElement = document.querySelector(".CodeMirror");
            if (editorElement == undefined) return;
            var editor = editorElement["CodeMirror"];
            console.log("AdTarget: Getting CodeMirror " + editor);
            if (editor == undefined) return;
            clearInterval(interval);
            this.pollCodeMirrorValidity(polling);
        }, polling);
    }

    pollCodeMirrorValidity(polling:number) {
        var interval = setInterval(() => {
            var editorElement = document.querySelector(".CodeMirror");
            if (editorElement == null) {
                clearInterval(interval);
                console.log("AdTarget: CodeMirror disappeared");
                // TODO: clear data
                this.pollStart(polling);
            } /* else if (true) { // TODO experience changed
                clearInterval(interval);
                console.log("AdTarget: experience changed");
                this.pollStart(polling);
            } else if (true) { // TODO code changed
                clearInterval(interval);
                console.log("AdTarget: code changed");
                this.pollStart(polling);
            } */
        }, polling);
    }
}

new Application(500);

