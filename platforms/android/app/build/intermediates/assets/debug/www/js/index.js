/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

console.log("Hello World");


var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        screen.orientation.lock('portrait').then(function success() {
            console.log("Successfully locked the orientation");
        }, function error(errMsg) {
            console.log("Error locking the orientation :: " + errMsg);
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {

    }
};

app.initialize();
(function () {
    //     var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //     myFunction(this);
    //     }
    //   };
    //   xhttp.open("GET", "./img/TEST-SVG-part.svg", true);
    //   xhttp.send();
    //   function myFunction(xml) {
    //     var i;
    //     var xmlDoc = xml.responseXML;

    //     console.log(xmlDoc);
    //   }
    // xmlhttp=new XMLHttpRequest();
    // xmlhttp.open("GET",'/img/TEST-SVG-part.svg',false);
    // xmlhttp.send();
    //             xmlDocument=xmlhttp.responseText;
    //             console.log(xmlDocument);
    // parser = new DOMParser();
    // xmlDoc = parser.parseFromString(`<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 720 1161" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><clipPath id="_clip1"><path d="M393.424,1160.15l-71.75,-0.01c-31.85,-0.65 -50.95,-3.96 -61.92,-10.71c-31.28,-19.28 -70.01,-48.56 -76.87,-78.55c-5.95,-26.03 -26.25,-127.564 -45.25,-226.392c-12.32,-53.012 -57.94,-303.416 -77,-408.688c-14.94,-82.562 -30.46,-169.221 -42.58,-237.75c-5.63,-31.834 -10.27,-58.322 -13.42,-76.599c-1.61,-9.324 -2.83,-16.535 -3.64,-21.436c-0.41,-2.519 -0.72,-4.459 -0.92,-5.779c-0.4,-2.664 -0.77,-5.182 1.3,-7.795l2.25,-2.836l6.65,-0.002l2.18,2.094c19.1,18.344 31.47,24.535 49,24.535c5.17,0 11,-0.486 18.91,-1.578c24.43,-3.414 41.06,-17.559 57.14,-31.238c16.05,-13.657 32.64,-27.776 56.3,-30.692c2.14,-0.261 4.45,-0.392 6.85,-0.392c11.47,0 25.1,2.918 42.35,6.613c27,5.785 63.96,13.703 114.43,14.674l0.13,-0.002c50.62,-0.947 87.63,-8.877 114.66,-14.666c17.22,-3.692 30.83,-6.608 42.3,-6.608c2.44,0 4.68,0.127 6.85,0.391c23.66,2.918 40.259,17.037 56.31,30.693c16.08,13.68 32.7,27.825 57.15,31.241c7.89,1.09 13.72,1.576 18.9,1.576c17.53,0 29.9,-6.197 49.02,-24.557l2.17,-2.092l6.65,-0.002l2.25,2.838c2.08,2.614 1.7,5.131 1.3,7.795c-0.19,1.321 -0.5,3.26 -0.92,5.782c-0.8,4.898 -2.02,12.111 -3.63,21.435c-3.15,18.273 -7.79,44.763 -13.42,76.603c-12.12,68.494 -27.64,155.153 -42.6,237.756c-19.07,105.363 -64.77,356.121 -77.04,408.838c-13.671,62.418 -25.56,124.801 -34.23,170.352c-5.12,26.868 -8.82,46.278 -11.02,55.898c-6.86,30.01 -45.57,59.28 -76.84,78.55c-10.97,6.75 -30.06,10.06 -61.92,10.71l-0.08,0Z"/></clipPath><g clip-path="url(#_clip1)"><path d="M393.664,1160.15l-71.75,-0.01c-31.86,-0.65 -50.96,-3.96 -61.92,-10.71c-31.28,-19.28 -70.01,-48.56 -76.87,-78.55c-5.95,-26.03 -26.25,-127.564 -45.25,-226.392c-12.32,-53.012 -57.94,-303.416 -77,-408.688c-14.94,-82.562 -30.47,-169.221 -42.59,-237.75c-5.63,-31.834 -10.27,-58.322 -13.42,-76.599c-1.6,-9.324 -2.83,-16.535 -3.63,-21.436c-0.42,-2.519 -0.73,-4.459 -0.92,-5.779c-0.4,-2.664 -0.78,-5.182 1.3,-7.795l2.25,-2.836l6.64,-0.002l2.18,2.094c19.11,18.344 31.47,24.535 49,24.535c5.18,0 11.01,-0.486 18.91,-1.578c24.44,-3.414 41.06,-17.559 57.14,-31.238c16.05,-13.657 32.65,-27.776 56.3,-30.692c2.15,-0.261 4.45,-0.392 6.86,-0.392c11.47,0 25.09,2.918 42.34,6.613c27,5.785 63.96,13.703 114.44,14.674l0.13,-0.002c50.61,-0.947 87.62,-8.877 114.65,-14.666c17.23,-3.692 30.84,-6.608 42.3,-6.608c2.44,0 4.68,0.127 6.85,0.391c23.67,2.918 40.269,17.037 56.31,30.693c16.08,13.68 32.71,27.825 57.15,31.241c7.89,1.09 13.73,1.576 18.9,1.576c17.53,0 29.91,-6.197 49.02,-24.557l2.18,-2.092l6.64,-0.002l2.26,2.838c2.07,2.614 1.7,5.131 1.3,7.795c-0.2,1.321 -0.51,3.26 -0.92,5.782c-0.81,4.898 -2.03,12.111 -3.64,21.435c-3.15,18.273 -7.79,44.763 -13.42,76.603c-12.11,68.494 -27.64,155.153 -42.59,237.756c-19.08,105.363 -64.77,356.121 -77.05,408.838c-13.67,62.418 -25.55,124.801 -34.23,170.352c-5.12,26.868 -8.82,46.278 -11.02,55.898c-6.86,30.01 -45.57,59.28 -76.83,78.55c-10.97,6.75 -30.07,10.06 -61.92,10.71l-0.08,0Z" style="fill:#009036;fill-rule:nonzero;"/><path d="M448.194,988.041c-0.04,6.794 -5.45,12.271 -12.07,12.233l-163,-0.942c-6.63,-0.038 -11.97,-5.578 -11.93,-12.372l-23.51,-950.641c0.04,-6.794 5.45,-12.271 12.07,-12.232l221.33,1.278c6.63,0.038 11.97,5.578 11.93,12.372l-34.82,950.304Z" style="fill:#009ee0;"/><path d="M607.554,12.155l-112.4,1093.15l223.86,-1101.17l-111.46,8.019l0,0.001Z" style="fill:#009ee0;"/><path d="M113.424,9.3l99.75,1094.38l-211.11,-1103.68l111.36,9.306l0,-0.006Z" style="fill:#009ee0;"/></g></g></svg>`,"text/xml");
    // let array = document.createElement('svg').appendChild(xmlDoc.ge);
    // array[1].addEventListener("click", function(){
    //     console.log("clicked");
    // });

    // fetch("../TEST-SVG-part.svg")
    //         .then(response => response.text())
    //         .then((response) => {
    //           var parser = new DomParser();
    //           var doc = parser.parseFromString(response, "application/xml");
    //           let i, elementsArray = [], firstElementId = 0;
    //           document.getElementById('root').appendChild(doc);
    //           console.log(response);


    //         }).catch((err) => {
    //           console.log('fetch', err)
    //         })
})();

$(document).ready(function () {
    // var a = document.getElementById("unique_ID");
    // // Get the SVG document inside the Object tag
    // console.log(a);
    // var svgDoc = a.contentDocument;
    // // Get one of the SVG items by ID;
    // // var svgItem = svgDoc.getElementById("svgItem");

    // console.log(svgDoc.getElementsByTagName("body"));

    // $.get(, function(data){
    //     var $svg = jQuery(data).find('svg');
    //     if(typeof imgID !== 'undefined') {
    //        $svg = $svg.attr('id', imgID);
    //     };
    //     if(typeof imgClass !== 'undefined'){
    //        $svg = $svg.attr('class', imgClass+' replaced-svg');
    //     };
    //     $svg = $svg.removeAttr('xmlns:a');
    //     $img.replaceWith($svg);
    //  },'xml');

    var parser = new DOMParser();
    var doc = parser.parseFromString(`<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 720 1161" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><clipPath id="_clip1"><path d="M393.424,1160.15l-71.75,-0.01c-31.85,-0.65 -50.95,-3.96 -61.92,-10.71c-31.28,-19.28 -70.01,-48.56 -76.87,-78.55c-5.95,-26.03 -26.25,-127.564 -45.25,-226.392c-12.32,-53.012 -57.94,-303.416 -77,-408.688c-14.94,-82.562 -30.46,-169.221 -42.58,-237.75c-5.63,-31.834 -10.27,-58.322 -13.42,-76.599c-1.61,-9.324 -2.83,-16.535 -3.64,-21.436c-0.41,-2.519 -0.72,-4.459 -0.92,-5.779c-0.4,-2.664 -0.77,-5.182 1.3,-7.795l2.25,-2.836l6.65,-0.002l2.18,2.094c19.1,18.344 31.47,24.535 49,24.535c5.17,0 11,-0.486 18.91,-1.578c24.43,-3.414 41.06,-17.559 57.14,-31.238c16.05,-13.657 32.64,-27.776 56.3,-30.692c2.14,-0.261 4.45,-0.392 6.85,-0.392c11.47,0 25.1,2.918 42.35,6.613c27,5.785 63.96,13.703 114.43,14.674l0.13,-0.002c50.62,-0.947 87.63,-8.877 114.66,-14.666c17.22,-3.692 30.83,-6.608 42.3,-6.608c2.44,0 4.68,0.127 6.85,0.391c23.66,2.918 40.259,17.037 56.31,30.693c16.08,13.68 32.7,27.825 57.15,31.241c7.89,1.09 13.72,1.576 18.9,1.576c17.53,0 29.9,-6.197 49.02,-24.557l2.17,-2.092l6.65,-0.002l2.25,2.838c2.08,2.614 1.7,5.131 1.3,7.795c-0.19,1.321 -0.5,3.26 -0.92,5.782c-0.8,4.898 -2.02,12.111 -3.63,21.435c-3.15,18.273 -7.79,44.763 -13.42,76.603c-12.12,68.494 -27.64,155.153 -42.6,237.756c-19.07,105.363 -64.77,356.121 -77.04,408.838c-13.671,62.418 -25.56,124.801 -34.23,170.352c-5.12,26.868 -8.82,46.278 -11.02,55.898c-6.86,30.01 -45.57,59.28 -76.84,78.55c-10.97,6.75 -30.06,10.06 -61.92,10.71l-0.08,0Z"/></clipPath><g clip-path="url(#_clip1)"><path d="M393.664,1160.15l-71.75,-0.01c-31.86,-0.65 -50.96,-3.96 -61.92,-10.71c-31.28,-19.28 -70.01,-48.56 -76.87,-78.55c-5.95,-26.03 -26.25,-127.564 -45.25,-226.392c-12.32,-53.012 -57.94,-303.416 -77,-408.688c-14.94,-82.562 -30.47,-169.221 -42.59,-237.75c-5.63,-31.834 -10.27,-58.322 -13.42,-76.599c-1.6,-9.324 -2.83,-16.535 -3.63,-21.436c-0.42,-2.519 -0.73,-4.459 -0.92,-5.779c-0.4,-2.664 -0.78,-5.182 1.3,-7.795l2.25,-2.836l6.64,-0.002l2.18,2.094c19.11,18.344 31.47,24.535 49,24.535c5.18,0 11.01,-0.486 18.91,-1.578c24.44,-3.414 41.06,-17.559 57.14,-31.238c16.05,-13.657 32.65,-27.776 56.3,-30.692c2.15,-0.261 4.45,-0.392 6.86,-0.392c11.47,0 25.09,2.918 42.34,6.613c27,5.785 63.96,13.703 114.44,14.674l0.13,-0.002c50.61,-0.947 87.62,-8.877 114.65,-14.666c17.23,-3.692 30.84,-6.608 42.3,-6.608c2.44,0 4.68,0.127 6.85,0.391c23.67,2.918 40.269,17.037 56.31,30.693c16.08,13.68 32.71,27.825 57.15,31.241c7.89,1.09 13.73,1.576 18.9,1.576c17.53,0 29.91,-6.197 49.02,-24.557l2.18,-2.092l6.64,-0.002l2.26,2.838c2.07,2.614 1.7,5.131 1.3,7.795c-0.2,1.321 -0.51,3.26 -0.92,5.782c-0.81,4.898 -2.03,12.111 -3.64,21.435c-3.15,18.273 -7.79,44.763 -13.42,76.603c-12.11,68.494 -27.64,155.153 -42.59,237.756c-19.08,105.363 -64.77,356.121 -77.05,408.838c-13.67,62.418 -25.55,124.801 -34.23,170.352c-5.12,26.868 -8.82,46.278 -11.02,55.898c-6.86,30.01 -45.57,59.28 -76.83,78.55c-10.97,6.75 -30.07,10.06 -61.92,10.71l-0.08,0Z" style="fill:#009036;fill-rule:nonzero;"/><path d="M448.194,988.041c-0.04,6.794 -5.45,12.271 -12.07,12.233l-163,-0.942c-6.63,-0.038 -11.97,-5.578 -11.93,-12.372l-23.51,-950.641c0.04,-6.794 5.45,-12.271 12.07,-12.232l221.33,1.278c6.63,0.038 11.97,5.578 11.93,12.372l-34.82,950.304Z" style="fill:#009ee0;"/><path d="M607.554,12.155l-112.4,1093.15l223.86,-1101.17l-111.46,8.019l0,0.001Z" style="fill:#009ee0;"/><path d="M113.424,9.3l99.75,1094.38l-211.11,-1103.68l111.36,9.306l0,-0.006Z" style="fill:#009ee0;"/></g></g></svg>`, "image/svg+xml");


    document.getElementById("root").appendChild(doc.getElementsByTagName("svg")[0]);
    test();

    function test() {

        $(document).ready(function () {
            let colorInputElement = document.getElementById("color-select");
            let heightToSet = (window.screen.height) / 1.5;
            console.log(document.getElementsByTagName("svg")[0].setAttribute("height", heightToSet));
            console.log("width", window.screen.width);
            console.log("height", window.screen.height);
            // screen.orientation.unlock();
            // screen.orientation.lock('any');
            // // screen.orientation.lock("any");
            // console.log("orientation", );

            // screen.orientation.lock('landscape').then(function success() {
            //     console.log("Successfully locked the orientation");
            // }, function error(errMsg) {
            //     console.log("Error locking the orientation :: " + errMsg);
            // });

            $('#color-picker').colorpicker();

            console.log("Parse Css", parseCss());

            let i;
            let elementSelected = null;

            for (i = 0; i < document.getElementsByTagName("path").length; i++) {
                let pathStyles = parseCss(document.getElementsByTagName("path")[i]);
                console.log("fill", pathStyles.fill);
                let elementToEdit = document.getElementsByTagName("path")[i];
                if (pathStyles.fill) {
                    document.getElementsByTagName("path")[i].setAttribute("id", i);
                    document.getElementById(i).addEventListener('click', function () {

                        if (elementSelected) {
                            elementSelected.removeAttribute("stroke");
                            elementSelected.removeAttribute("stroke-width");
                        }
                        elementToEdit.setAttribute("stroke", "black");
                        elementToEdit.setAttribute("stroke-width", "8");
                        elementSelected = elementToEdit;
                        let elementSelectedColorArray = elementSelected.style.fill.toString().split("(")[1].split(")")[0].split(",").map(function (x) {             //For each array element
                            x = parseInt(x).toString(16);      //Convert to a base16 string
                            return (x.length == 1) ? "0" + x : x;  //Add zero if we get only one character
                        });
                        elementSelectedColorArray = "#" + elementSelectedColorArray.join("");
                        colorInputElement.value = elementSelectedColorArray;
                        console.log("Color input element value", elementSelectedColorArray);
                    })

                }
            }

            colorInputElement.addEventListener("change", function (event) {
                elementSelected.style.fill = event.target.value;
            }, false);

            document.getElementById("done").addEventListener("click", function () {
                elementSelected.removeAttribute("stroke");
            });

            console.log("Color", document.getElementById("color-select").value);

            var restoreDocument = parser.parseFromString(`<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 720 1161" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><clipPath id="_clip1"><path d="M393.424,1160.15l-71.75,-0.01c-31.85,-0.65 -50.95,-3.96 -61.92,-10.71c-31.28,-19.28 -70.01,-48.56 -76.87,-78.55c-5.95,-26.03 -26.25,-127.564 -45.25,-226.392c-12.32,-53.012 -57.94,-303.416 -77,-408.688c-14.94,-82.562 -30.46,-169.221 -42.58,-237.75c-5.63,-31.834 -10.27,-58.322 -13.42,-76.599c-1.61,-9.324 -2.83,-16.535 -3.64,-21.436c-0.41,-2.519 -0.72,-4.459 -0.92,-5.779c-0.4,-2.664 -0.77,-5.182 1.3,-7.795l2.25,-2.836l6.65,-0.002l2.18,2.094c19.1,18.344 31.47,24.535 49,24.535c5.17,0 11,-0.486 18.91,-1.578c24.43,-3.414 41.06,-17.559 57.14,-31.238c16.05,-13.657 32.64,-27.776 56.3,-30.692c2.14,-0.261 4.45,-0.392 6.85,-0.392c11.47,0 25.1,2.918 42.35,6.613c27,5.785 63.96,13.703 114.43,14.674l0.13,-0.002c50.62,-0.947 87.63,-8.877 114.66,-14.666c17.22,-3.692 30.83,-6.608 42.3,-6.608c2.44,0 4.68,0.127 6.85,0.391c23.66,2.918 40.259,17.037 56.31,30.693c16.08,13.68 32.7,27.825 57.15,31.241c7.89,1.09 13.72,1.576 18.9,1.576c17.53,0 29.9,-6.197 49.02,-24.557l2.17,-2.092l6.65,-0.002l2.25,2.838c2.08,2.614 1.7,5.131 1.3,7.795c-0.19,1.321 -0.5,3.26 -0.92,5.782c-0.8,4.898 -2.02,12.111 -3.63,21.435c-3.15,18.273 -7.79,44.763 -13.42,76.603c-12.12,68.494 -27.64,155.153 -42.6,237.756c-19.07,105.363 -64.77,356.121 -77.04,408.838c-13.671,62.418 -25.56,124.801 -34.23,170.352c-5.12,26.868 -8.82,46.278 -11.02,55.898c-6.86,30.01 -45.57,59.28 -76.84,78.55c-10.97,6.75 -30.06,10.06 -61.92,10.71l-0.08,0Z"/></clipPath><g clip-path="url(#_clip1)"><path d="M393.664,1160.15l-71.75,-0.01c-31.86,-0.65 -50.96,-3.96 -61.92,-10.71c-31.28,-19.28 -70.01,-48.56 -76.87,-78.55c-5.95,-26.03 -26.25,-127.564 -45.25,-226.392c-12.32,-53.012 -57.94,-303.416 -77,-408.688c-14.94,-82.562 -30.47,-169.221 -42.59,-237.75c-5.63,-31.834 -10.27,-58.322 -13.42,-76.599c-1.6,-9.324 -2.83,-16.535 -3.63,-21.436c-0.42,-2.519 -0.73,-4.459 -0.92,-5.779c-0.4,-2.664 -0.78,-5.182 1.3,-7.795l2.25,-2.836l6.64,-0.002l2.18,2.094c19.11,18.344 31.47,24.535 49,24.535c5.18,0 11.01,-0.486 18.91,-1.578c24.44,-3.414 41.06,-17.559 57.14,-31.238c16.05,-13.657 32.65,-27.776 56.3,-30.692c2.15,-0.261 4.45,-0.392 6.86,-0.392c11.47,0 25.09,2.918 42.34,6.613c27,5.785 63.96,13.703 114.44,14.674l0.13,-0.002c50.61,-0.947 87.62,-8.877 114.65,-14.666c17.23,-3.692 30.84,-6.608 42.3,-6.608c2.44,0 4.68,0.127 6.85,0.391c23.67,2.918 40.269,17.037 56.31,30.693c16.08,13.68 32.71,27.825 57.15,31.241c7.89,1.09 13.73,1.576 18.9,1.576c17.53,0 29.91,-6.197 49.02,-24.557l2.18,-2.092l6.64,-0.002l2.26,2.838c2.07,2.614 1.7,5.131 1.3,7.795c-0.2,1.321 -0.51,3.26 -0.92,5.782c-0.81,4.898 -2.03,12.111 -3.64,21.435c-3.15,18.273 -7.79,44.763 -13.42,76.603c-12.11,68.494 -27.64,155.153 -42.59,237.756c-19.08,105.363 -64.77,356.121 -77.05,408.838c-13.67,62.418 -25.55,124.801 -34.23,170.352c-5.12,26.868 -8.82,46.278 -11.02,55.898c-6.86,30.01 -45.57,59.28 -76.83,78.55c-10.97,6.75 -30.07,10.06 -61.92,10.71l-0.08,0Z" style="fill:#009036;fill-rule:nonzero;"/><path d="M448.194,988.041c-0.04,6.794 -5.45,12.271 -12.07,12.233l-163,-0.942c-6.63,-0.038 -11.97,-5.578 -11.93,-12.372l-23.51,-950.641c0.04,-6.794 5.45,-12.271 12.07,-12.232l221.33,1.278c6.63,0.038 11.97,5.578 11.93,12.372l-34.82,950.304Z" style="fill:#009ee0;"/><path d="M607.554,12.155l-112.4,1093.15l223.86,-1101.17l-111.46,8.019l0,0.001Z" style="fill:#009ee0;"/><path d="M113.424,9.3l99.75,1094.38l-211.11,-1103.68l111.36,9.306l0,-0.006Z" style="fill:#009ee0;"/></g></g></svg>`, "image/svg+xml");
            let rootNode = document.getElementById("root");
            let initialSVG = restoreDocument.getElementsByTagName("svg")[0];
            console.log("initialSVG", restoreDocument);
            document.getElementById("reset-button").addEventListener('click', function () {

                $(document).ready(function () {
                    $('svg')[0].remove();
                    rootNode.appendChild(initialSVG);
                    colorInputElement.value = "#000000";
                    test();
                });
            });

            function parseCss(el) {
                var output = {};

                if (!el || !el.getAttribute('style')) {
                    return output;
                }

                var camelize = function camelize(str) {
                    return str.replace(/(?:^|[-])(\w)/g, function (a, c) {
                        c = a.substr(0, 1) === '-' ? c.toUpperCase() : c;
                        return c ? c : '';
                    });
                }

                var style = el.getAttribute('style').split(';');
                for (var i = 0; i < style.length; ++i) {
                    var rule = style[i].trim();
                    if (rule) {
                        var ruleParts = rule.split(':');
                        var key = camelize(ruleParts[0].trim());
                        output[key] = ruleParts[1].trim();
                    }
                }

                return output;
            }

            scaleSVG = () => {

            };
        });
    }
});

