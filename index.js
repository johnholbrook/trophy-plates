// SVG templates
var vrc_template = `<svg width="100%" viewBox="0 0 1350 900" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="Outline" transform="matrix(7.90494,0,0,11.4249,-1006.13,-2763.08)">
        <path d="M288.57,245.514C288.57,243.49 286.195,241.846 283.269,241.846L142.067,241.846C139.141,241.846 136.766,243.49 136.766,245.514L136.766,316.954C136.766,318.978 139.141,320.621 142.067,320.621L283.269,320.621C286.195,320.621 288.57,318.978 288.57,316.954L288.57,245.514Z" style="fill:none;stroke:black;stroke-width:0.21px;"/>
    </g>
    <g id="Mounting-holes" serif:id="Mounting holes" transform="matrix(1,0,0,1,-52.5,-27)">
        <g transform="matrix(1.2235,0,0,1.97788,51.2679,-56.5661)">
            <ellipse cx="123.606" cy="118.089" rx="22.068" ry="13.651" style="fill:none;stroke:black;stroke-width:1.27px;"/>
        </g>
        <g transform="matrix(1.2235,0,0,1.97788,1101.27,-56.5661)">
            <ellipse cx="123.606" cy="118.089" rx="22.068" ry="13.651" style="fill:none;stroke:black;stroke-width:1.27px;"/>
        </g>
        <g transform="matrix(1.2235,0,0,1.97788,1101.27,543.434)">
            <ellipse cx="123.606" cy="118.089" rx="22.068" ry="13.651" style="fill:none;stroke:black;stroke-width:1.27px;"/>
        </g>
        <g transform="matrix(1.2235,0,0,1.97788,51.2679,543.434)">
            <ellipse cx="123.606" cy="118.089" rx="22.068" ry="13.651" style="fill:none;stroke:black;stroke-width:1.27px;"/>
        </g>
    </g>

    {image_1}

    {image_2}

    {event_1}
    
    {event_2}
    
    {event_3}
    
    {award_1}    

    {award_2}
</svg>
`;

var viqc_template = `<svg width="100%" viewBox="0 0 1050 750" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="Border" transform="matrix(3.62581,0,0,5.72106,-312.805,-1252.63)">
        <path d="M375.862,225.054C375.862,221.685 371.547,218.951 366.232,218.951L95.902,218.951C90.587,218.951 86.272,221.685 86.272,225.054L86.272,343.942C86.272,347.31 90.587,350.045 95.902,350.045L366.232,350.045C371.547,350.045 375.862,347.31 375.862,343.942L375.862,225.054Z" style="fill:none;stroke:black;stroke-width:0.43px;"/>
    </g>
    <g id="Holes">
        <g transform="matrix(1.5804,0,0,1.46469,871.841,545.87)">
            <ellipse cx="65.274" cy="88.162" rx="16.135" ry="17.41" style="fill:none;stroke:black;stroke-width:1.37px;"/>
        </g>
        <g transform="matrix(1.5804,0,0,1.46469,-28.1589,545.87)">
            <ellipse cx="65.274" cy="88.162" rx="16.135" ry="17.41" style="fill:none;stroke:black;stroke-width:1.37px;"/>
        </g>
        <g transform="matrix(1.5804,0,0,1.46469,871.841,-54.1301)">
            <ellipse cx="65.274" cy="88.162" rx="16.135" ry="17.41" style="fill:none;stroke:black;stroke-width:1.37px;"/>
        </g>
        <g transform="matrix(1.5804,0,0,1.46469,-28.1589,-54.1301)">
            <ellipse cx="65.274" cy="88.162" rx="16.135" ry="17.41" style="fill:none;stroke:black;stroke-width:1.37px;"/>
        </g>
    </g>

    {image_1}

    {image_2}

    {event_1}
    
    {event_2}
    
    {event_3}
    
    {award_1}    

    {award_2}
</svg>
`;

// global to keep track of current settings
var options = {
    template : "vrc", 
    event_1 : "",
    event_2 : "",
    event_3 : "",
    image_1 : "",
    image_2 : "",
    awards : [{line_1: "", line_2: ""}]
};

var object_params = {
    vrc : {
        event_1: {x: 675, y:510, size:50, bold: false},
        event_2: {x: 675, y:580, size:60, bold: true},
        event_3: {x: 675, y:645, size:50, bold: false},
        award_1: {x: 675, y:740, size:90, bold: true},
        award_2: {x: 675, y:830, size:90, bold: true},
        award_center: {x: 675, y:785, size:90, bold: true},
        image_1: {x: 450, y:250, size:400},
        image_2: {x: 900, y:250, size:400},
        image_center: {x: 675, y:250, height:400, width:900}
    },
    viqc : {
        event_1: {x: 525, y:410, size:45, bold: false},
        event_2: {x: 525, y:470, size:50, bold: true},
        event_3: {x: 525, y:530, size:45, bold: false},
        award_1: {x: 525, y:610, size:80, bold: true},
        award_2: {x: 525, y:700, size:80, bold: true},
        award_center: {x: 525, y:655, size:80, bold: true},
        image_1: {x: 320, y:200, size:350},
        image_2: {x: 730, y:200, size:350},
        image_center: {x: 525, y:200, height:350, width:760}
    }
}

var current_award = 0;

document.addEventListener("DOMContentLoaded", () => {
    addAward();

    setTimeout(updatePreview, 250);

    document.querySelector("#generate-zip").onclick = saveFiles;

    document.querySelector("#btn_template_vrc").onchange = () => {
        options.template = "vrc";
        document.querySelector("#size-info").innerHTML = "Actual size: 4in x 3in";
        updatePreview();
    };

    document.querySelector("#btn_template_viqc").onchange = () => {
        options.template = "viqc";
        document.querySelector("#size-info").innerHTML = "Actual size: 3.5in x 2.5in";
        updatePreview();
    };

    document.querySelector("#image1file").onchange = () => {
        if (document.querySelector("#image1file").files.length == 0){
            options.image_1 = "";
        }
        else{
            let file = document.querySelector("#image1file").files[0];
            let reader = new FileReader();
            let extension = file.name.split(".").slice(-1)[0];
            let params = object_params[options.template].image_1;

            if (extension == "svg"){
                reader.readAsText(file);
                reader.onload = () => {
                    options.image_1 = reader.result;
                    options.image_1_is_svg = true;
                    updatePreview();
                };
            }
            else{
                reader.readAsDataURL(file);
                reader.onload = () => {
                    options.image_1 = reader.result;
                    options.image_1_is_svg = false;
                    updatePreview();
                };
            }
        }
    };

    document.querySelector("#image2file").onchange = () => {
        if (document.querySelector("#image2file").files.length == 0){
            options.image_2 = "";
        }
        else {
            let file = document.querySelector("#image2file").files[0];
            let reader = new FileReader();
            let extension = file.name.split(".").slice(-1)[0];
            let params = object_params[options.template].image_2;

            if (extension == "svg"){
                reader.readAsText(file);
                reader.onload = () => {
                    options.image_2 = reader.result;
                    options.image_2_is_svg = true;
                    updatePreview();
                };
            }
            else{
                reader.readAsDataURL(file);
                reader.onload = () => {
                    options.image_2 = reader.result;
                    options.image_2_is_svg = false;
                    updatePreview();
                };
            }
        }
    };

    document.querySelector("#event-1").onchange = () => {
        options.event_1 = document.querySelector("#event-1").value;
        updatePreview();
    };
    document.querySelector("#event-2").onchange = () => {
        options.event_2 = document.querySelector("#event-2").value;
        updatePreview();
    };
    document.querySelector("#event-3").onchange = () => {
        options.event_3 = document.querySelector("#event-3").value;
        updatePreview();
    };

    document.querySelector("#prev-preview").onclick = () => {
        getAwardNames();
        current_award -= 1;
        if (current_award < 0) {current_award = options.awards.length-1};
        updatePreview();
    };

    document.querySelector("#next-preview").onclick = () => {
        getAwardNames();
        current_award += 1;
        if (current_award >= options.awards.length) {current_award = 0};
        updatePreview();
    };
});

function textToPath(text, loc_x, loc_y, size, bold=false){
    let text_options = {
        x: loc_x,
        y: loc_y,
        fontSize: size,
        anchor: "center middle"
    };

    if (bold){
        return textToSVG_bold.getPath(text, text_options);
    }
    else{
        return textToSVG_regular.getPath(text, text_options);
    }
}

var tmp2;

function generateSVG(award_no){
    // get template and options
    let params = object_params[options.template];
    let tmp = options.template == "vrc" ? vrc_template : viqc_template;

    // insert event text
    tmp = tmp.replace("{event_1}", textToPath(options.event_1, params.event_1.x, params.event_1.y, params.event_1.size, params.event_1.bold))
             .replace("{event_2}", textToPath(options.event_2, params.event_2.x, params.event_2.y, params.event_2.size, params.event_2.bold))
             .replace("{event_3}", textToPath(options.event_3, params.event_3.x, params.event_3.y, params.event_3.size, params.event_3.bold));

    // insert images
    if (options.image_1 == "" && options.image_2 == ""){console.log("No images!")}
    else if (options.image_1 == "" || options.image_2 == ""){
        let image_content, is_svg;
        if (options.image_2 == "") {
            image_content = options.image_1;
            is_svg = options.image_1_is_svg;
        }
        else{
            image_content = options.image_2;
            is_svg = options.image_2_is_svg;
        }
        
        if (is_svg){
            let tmp_i = htmlToElem(image_content);
            // tmp_i.setAttribute("x", `${params.image_center.x-(params.image_center.width/2)}px`);
            // tmp_i.setAttribute("y", `${params.image_center.y-(params.image_center.height/2)}px`);
            tmp_i.setAttribute("height", `${params.image_center.height}px`);
            tmp_i.setAttribute("width", `${params.image_center.width}px`);
            tmp_i.setAttribute("preserveAspectRatio", "xMidYMid meet");
            let g_html = `<g transform="matrix(1,0,0,1,${params.image_center.x-(params.image_center.width/2)},${params.image_center.y-(params.image_center.height/2)})">${tmp_i.outerHTML}</g>`
            tmp = tmp.replace("{image_1}", g_html);
            // tmp = tmp.replace("{image_1}", tmp_i.outerHTML);
        }
        else{
            let tmp_i = `<image xlink:href="${image_content}" x="${params.image_center.x-(params.image_center.width/2)}px" y="${params.image_center.y-(params.image_center.height/2)}px" height="${params.image_center.height}px" width="${params.image_center.width}px" preserveAspectRatio="xMidYMid meet" />`;
            tmp = tmp.replace("{image_1}", tmp_i);
        }
    }
    else {
        if (options.image_1_is_svg){
            let tmp_i1 = htmlToElem(options.image_1);
            // tmp_i1.setAttribute("x", `${params.image_1.x-(params.image_1.size/2)}px`);
            // tmp_i1.setAttribute("y", `${params.image_1.y-(params.image_1.size/2)}px`);
            tmp_i1.setAttribute("height", `${params.image_1.size}px`);
            tmp_i1.setAttribute("width", `${params.image_1.size}px`);
            tmp_i1.setAttribute("preserveAspectRatio", "xMidYMid meet");
            // tmp = tmp.replace("{image_1}", tmp_i1.outerHTML);
            let g_html = `<g transform="matrix(1,0,0,1,${params.image_1.x-(params.image_1.size/2)},${params.image_1.y-(params.image_1.size/2)})">${tmp_i1.outerHTML}</g>`
            tmp = tmp.replace("{image_1}", g_html);
        }
        else{
            let tmp_i1 = `<image xlink:href="${options.image_1}" x="${params.image_1.x-(params.image_1.size/2)}px" y="${params.image_1.y-(params.image_1.size/2)}px" height="${params.image_1.size}px" width="${params.image_1.size}px" preserveAspectRatio="xMidYMid meet" />`;
            tmp = tmp.replace("{image_1}", tmp_i1);
        }
    
        if (options.image_2_is_svg){
            let tmp_i2 = htmlToElem(options.image_2);
            // tmp_i2.setAttribute("x", `${params.image_2.x-(params.image_2.size/2)}px`);
            // tmp_i2.setAttribute("y", `${params.image_2.y-(params.image_2.size/2)}px`);
            tmp_i2.setAttribute("height", `${params.image_2.size}px`);
            tmp_i2.setAttribute("width", `${params.image_2.size}px`);
            tmp_i2.setAttribute("preserveAspectRatio", "xMidYMid meet");
            // tmp = tmp.replace("{image_2}", tmp_i2.outerHTML);
            let g_html = `<g transform="matrix(1,0,0,1,${params.image_2.x-(params.image_2.size/2)},${params.image_2.y-(params.image_2.size/2)})">${tmp_i2.outerHTML}</g>`
            tmp = tmp.replace("{image_2}", g_html);
        }
        else{
            let tmp_i2 = `<image xlink:href="${options.image_2}" x="${params.image_2.x-(params.image_2.size/2)}px" y="${params.image_2.y-(params.image_2.size/2)}px" height="${params.image_2.size}px" width="${params.image_2.size}px" preserveAspectRatio="xMidYMid meet" />`;
            tmp = tmp.replace("{image_2}", tmp_i2);
        }
    }

    // insert award names
    let award = options.awards[award_no];
    if (award.line_1 == "" || award.line_2 == ""){
        tmp = tmp.replace("{award_1}", textToPath(award.line_1+award.line_2, params.award_center.x, params.award_center.y, params.award_center.size, params.award_center.bold))
    }
    else{
        tmp = tmp.replace("{award_1}", textToPath(award.line_1, params.award_1.x, params.award_1.y, params.award_1.size, params.award_1.bold))
                 .replace("{award_2}", textToPath(award.line_2, params.award_2.x, params.award_2.y, params.award_2.size, params.award_2.bold));
    }

    return tmp;
}

// update the preview image
function updatePreview(){
    document.querySelector("#preview").innerHTML = generateSVG(current_award);
};

// Generates a random ID
function randID(){
    return Math.random().toString(16).substr(2, 6);
}

// generate a DOM element from an html string
function htmlToElem(html) {
    let tmp = document.createElement('template');
    html = html.trim(); // Never return a space text node as a result
    tmp.innerHTML = html;
    return tmp.content.firstElementChild;
}

// add an entry to the list of award names
function addAward(){
    let id = randID();
    let award_html = `<div class="input-group mb-3 award-name" id="award-${id}">
    <span class="input-group-text">Line 1</span>
    <input type="text" class="form-control" placeholder="Excellence" onchange="getAwardNames()">
    <span class="input-group-text">Line 2</span>
    <input type="text" class="form-control" placeholder="Award" onchange="getAwardNames()">
    <button class="btn btn-danger" onclick="deleteAward('${id}')">🗑️</button>
    </div>`;
    let new_element = htmlToElem(award_html);
    document.querySelector("#awards-list").appendChild(new_element);
}

// remove an entry from the list of award names
function deleteAward(id){
    document.querySelector(`#award-${id}`).remove();
    getAwardNames();
}

function snake_case(str) { 
    return str && str.match( 
/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) 
        .map(s => s.toLowerCase()) 
        .join('_'); 
} 

// assemble the list of award names
function getAwardNames(){
    let tmp = [];
    document.querySelectorAll(".award-name").forEach(i => {
        let lines = i.querySelectorAll("input");
        tmp.push({line_1: lines[0].value, line_2: lines[1].value});
    });
    options.awards = tmp;
    if (current_award >= options.awards.length) {current_award = options.awards.length-1};
    updatePreview();
}

function saveAs(blob, name){
    let blobUrl = URL.createObjectURL(blob);
    var link = document.createElement("a"); // Or maybe get it from the current document
    link.href = blobUrl;
    link.download = name;
    link.click();
}

function saveFiles(){
    let zip = new JSZip();

    for (let i=0; i<options.awards.length; i++){
        let fileContents = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        ${generateSVG(i)}`;

        let line1 = options.awards[i].line_1;
        let line2 = options.awards[i].line_2;
        let fileName;
        if (line1 == "" && line2 == ""){fileName = `unnamed_award_${i}.svg`}
        else if (line1 == "" || line2 == ""){fileName = `${snake_case(line1+line2)}.svg`}
        else {fileName = `${snake_case(line1)}_${snake_case(line2)}.svg`}
        
        zip.file(fileName, fileContents)
    }

    let line1 = options.event_1;
    let line2 = options.event_2;
    let line3 = options.event_3;
    let zipName;
    if (line1 == "" && line2 == "" && line3 == ""){zipName = "unnamed_event.zip"}
    else if (line1 == "" || line2 == "" || line3 == ""){zipName = `${snake_case(line1+line2+line3)}.zip`}
    else {zipName = `${snake_case(line1)}_${snake_case(line2)}_${snake_case(line3)}.zip`}

    zip.generateAsync({type:"blob"})
       .then(function(content) {
            // Force down of the Zip file
            saveAs(content, zipName);
            // console.log(content);
    });
}