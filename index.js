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

    <!-- {logo_1}
    
    {logo_2} -->

    <!-- <text x="50%" y="520px" text-anchor="middle" style="font-family:'Helvetica', 'Helvetica';font-size:50px;fill:black;">
    </text> -->

    {event_1}
    
    {event_2}
    
    {event_3}
    
    <text x="50%" y="760px" text-anchor="middle" style="font-family:'Helvetica', 'Helvetica';font-size:90px;fill:black;font-weight:bold;">
        {award_1}
    </text>
    
    <text x="50%" y="850px" text-anchor="middle" style="font-family:'Helvetica', 'Helvetica';font-size:90px;fill:black;font-weight:bold;">
        {award_2}
    </text>
</svg>
`;

// global to keep track of current settings
var options = {
    template : "vrc", 
    event_1 : "",
    event_2 : "",
    event_3 : ""
};

var text_params = {
    vrc : {
        event_1: {x: 675, y:510, size:50, bold: false},
        event_2: {x: 675, y:580, size:60, bold: true},
        event_3: {x: 675, y:645, size:50, bold: false}
    }
}

document.addEventListener("DOMContentLoaded", () => {
    addAward();

    // update preview when options are changed
    document.querySelector("#template-select").onchange = () => {
        options.template = document.querySelector("#template-select").value;
        updatePreview();
    };

    // document.querySelector("#image1file").onchange = () => {
    //     options.image1 = 
    // }

    document.querySelector("#event-1").onchange = () => {
        // options.event_1 = document.querySelector("#event-1").value;
        let params = text_params[options.template].event_1;
        options.event_1 = textToPath(document.querySelector("#event-1").value, params.x, params.y, params.size, params.bold);
        updatePreview();
    };
    document.querySelector("#event-2").onchange = () => {
        // options.event_2 = document.querySelector("#event-2").value;
        let params = text_params[options.template].event_2;
        options.event_2 = textToPath(document.querySelector("#event-2").value, params.x, params.y, params.size, params.bold);
        updatePreview();
    };
    document.querySelector("#event-3").onchange = () => {
        // options.event_3 = document.querySelector("#event-3").value;
        let params = text_params[options.template].event_3;
        options.event_3 = textToPath(document.querySelector("#event-3").value, params.x, params.y, params.size, params.bold);
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
    console.log(options);

    if (bold){
        return textToSVG_bold.getPath(text, text_options);
    }
    else{
        return textToSVG_regular.getPath(text, text_options);
    }
}

// update the preview image
function updatePreview(){
    // console.log(options);
    let tmp = vrc_template.replace("{event_1}", options.event_1)
                          .replace("{event_2}", options.event_2)
                          .replace("{event_3}", options.event_3)
                          .replace("{award_1}", "Award Line 1")
                          .replace("{award_2}", "Award Line 2");

    document.querySelector("#preview").innerHTML = tmp;
};

// Generates a random ID
function randID(){
    return Math.random().toString(16).substr(2, 6);
}

// generate a DOM element from an html string
function htmlToElem(html) {
    let temp = document.createElement('template');
    html = html.trim(); // Never return a space text node as a result
    temp.innerHTML = html;
    return temp.content.firstChild;
}

// add an entry to the list of award names
function addAward(){
    let id = randID();
    let award_html = `<div class="input-group mb-3" id="award-${id}">
    <span class="input-group-text">Line 1</span>
    <input type="text" class="form-control" placeholder="Excellence">
    <span class="input-group-text">Line 2</span>
    <input type="text" class="form-control" placeholder="Award">
    <button class="btn btn-danger" onclick="deleteAward('${id}')">-</button>
    </div>`;
    let new_element = htmlToElem(award_html);
    document.querySelector("#awards-list").appendChild(new_element);
}

// remove an entry from the list of award names
function deleteAward(id){
    document.querySelector(`#award-${id}`).remove();
}