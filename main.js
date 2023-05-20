
function isUdf(x) {
    return typeof x === "undefined";
}

function isObject(x) {
    return typeof x === "object";
}

function initOptions(options, defaults) {
    if (isUdf(options)) {
        options = {};
    } else if (!isObject(options)) {
        // throw new Error("Invalid Argument.");
        options = {};
    }

    return Object.assign({}, defaults, options);
}

const ITEM_BOX_DEFAULTS = {};

class ItemBox {
    constructor(root, options) {
        this._root = root;
        this._options = options = initOptions(options, ITEM_BOX_DEFAULTS);

        this._createAndAttachElements();
    }

    _createAndAttachElements() {
        this._item = document.createElement("div");
        this._item.classList.add("item");
        this._root.append(this._item);

        this._imageLink = document.createElement("a");
        if (this._options.itemLink) {
            this._imageLink.href = this._options.itemLink;
        }
        this._imageLink.setAttribute("target", "_blank");
        this._item.append(this._imageLink);

        this._image = document.createElement("img");
        this._image.classList.add("item__image");
        this._image.src = this._options.imageUrl;
        this._imageLink.appendChild(this._image);
        
        if (this._options.githubUrl) {
            this._githubLink = document.createElement("a");
            this._githubLink.href = this._options.githubUrl;
            this._githubLink.setAttribute("target", "_blank");
            this._item.append(this._githubLink);
            
            this._github = document.createElement("img");
            this._github.classList.add("item__github");
            this._github.src = "./github/github-mark.svg";
            this._githubLink.appendChild(this._github);
        }
    }
}

function main() {
    const root = document.getElementById("root");

    const feed = document.createElement("div");
    feed.classList.add("feed");
    root.appendChild(feed);

    const rubiksCube = new ItemBox(feed, {
        imageUrl: "./images/rubiks-cube.png",
        itemLink: "./rubiks-cube-graphics",
        githubUrl: "https://github.com/tniyer2/rubiks-cube-graphics"
    });

    const flightSim = new ItemBox(feed, {
        imageUrl: "./images/flight-sim.png",
        itemLink: "./flight-simulator",
        githubUrl: "https://github.com/tniyer2/flight-simulator"
    });

    const hammerGame = new ItemBox(feed, {
        imageUrl: "./images/hammer-game.png",
        itemLink: "./hammer-game",
        githubUrl: "https://github.com/tniyer2/hammer-game"
    });
}
main();
