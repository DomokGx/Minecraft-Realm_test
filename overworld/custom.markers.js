/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [
        {
            x: 1244,
            z: 4,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Spawn", 
            textColor: "Dark", 
            offsetX: 0,
            offsetY: 0, 
            font: "20px Minecraft"
        },
        {
            x: -4308,
            z: -1815,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Base", 
            textColor: "Dark", 
            offsetX: 0,
            offsetY: 0, 
            font: "20px Minecraft"
        },
        {
            x: -4058,
            z: -2655,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Tama/Csaba háza", 
            textColor: "Dark", 
            offsetX: 0,
            offsetY: 0, 
            font: "16px Minecraft"
        },
        {
            x: -639,
            z: 1000,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "End", 
            textColor: "Dark", 
            offsetX: 0,
            offsetY: 0, 
            font: "20px Minecraft"
        },
        {
            x: -8552,
            z: -5175,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "End", 
            textColor: "Dark", 
            offsetX: 0,
            offsetY: 0, 
            font: "16px Minecraft"
        },
        {
            x: -843,
            z: -1177,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "End", 
            textColor: "Dark", 
            offsetX: 0,
            offsetY: 0, 
            font: "16px Minecraft"
        },
        {
            x: 997,
            z: -378,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "End", 
            textColor: "Dark", 
            offsetX: 0,
            offsetY: 0, 
            font: "16px Minecraft"
        },
        {
            x: 1427,
            z: 4170,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "End", 
            textColor: "Dark", 
            offsetX: 0,
            offsetY: 0, 
            font: "16px Minecraft"
        },
        {
            x: -24055,
            z: -2174,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "End", 
            textColor: "Dark", 
            offsetX: 0,
            offsetY: 0, 
            font: "16px Minecraft"
        }

        // add your markers here




        // do not delete the following two closing brackets
    ]
}
