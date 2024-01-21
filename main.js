
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
        throw new Error("Invalid Argument.");
    }

    return Object.assign({}, defaults, options);
}

const ALL_ITEMS = {};

const ITEM_BOX_DEFAULTS = {};

class ItemBox {
    constructor(root, options) {
        this._root = root;
        this._options = options = initOptions(options, ITEM_BOX_DEFAULTS);

        if (!(options.topic in ALL_ITEMS)) {
            ALL_ITEMS[options.topic] = [];
        }
        ALL_ITEMS[options.topic].push(this);

        this._createAndAttachElements();
    }

    _createAndAttachElements() {
        this._item = document.createElement("div");
        this._item.classList.add("item");

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

        this._title = document.createElement("span");
        this._title.textContent = this._options.title || "";
        this._title.classList.add("item__title");
        this._item.append(this._title);
    }

    attach() {
        this._root.append(this._item);
    }

    detach() {
        this._item.remove();
    }
}

let CUR_TOPIC = null;

function setTopic(newTopic) {
    if (CUR_TOPIC !== null) {
        ALL_ITEMS[CUR_TOPIC].forEach((item) => {
            item.detach();
        });
    }

    ALL_ITEMS[newTopic].forEach((item) => {
        item.attach();
    });

    CUR_TOPIC = newTopic;
}

function main() {
    const root = document.getElementById("root");

    const webDevButton = document.getElementById("general-button");
    const gameDevButton = document.getElementById("game-dev-button");

    webDevButton.addEventListener("click", function () {
        setTopic("general");
    });

    gameDevButton.addEventListener("click", function () {
        setTopic("game-dev");
    });

    const feed = document.createElement("div");
    feed.classList.add("feed");
    root.appendChild(feed);




    const bookmarkManager = new ItemBox(feed, {
        topic: "general",
        title: "Bookmark Manager Extension",
        imageUrl: "./images/bookmark.svg",
        itemLink: "https://chromewebstore.google.com/detail/bookmark-manager/bpbkeoboacafeolmjaidheedfeapfike",
        githubUrl: "https://github.com/tniyer2/bookmark-manager-nodejs"
    });

    const imageEditor = new ItemBox(feed, {
        topic: "general",
        title: "Image Editor WebApp",
        imageUrl: "./images/image-editor.jpg",
        itemLink: "./image-editor",
        githubUrl: "https://github.com/tniyer2/image-editor-nodejs"
    });

    const framework = new ItemBox(feed, {
        topic: "general",
        title: "JS Framework",
        itemLink: "https://github.com/tniyer2/framework",
        githubUrl: "https://github.com/tniyer2/framework"
    });

    const jsClass = new ItemBox(feed, {
        topic: "general",
        title: "JS Class System",
        itemLink: "https://github.com/tniyer2/jsclass",
        githubUrl: "https://github.com/tniyer2/jsclass"
    });

    const steamReviewsDataWrangling = new ItemBox(feed, {
        topic: "general",
        title: "Steam Reviews Data Wrangling",
        itemLink: "https://github.com/tniyer2/Steam_Reviews_Data_Wrangling",
        githubUrl: "https://github.com/tniyer2/Steam_Reviews_Data_Wrangling"
    });

    const chessImageDetection = new ItemBox(feed, {
        topic: "general",
        title: "Chess Image Detection",
        itemLink: "https://github.com/tniyer2/chess_image_detection",
        githubUrl: "https://github.com/tniyer2/chess_image_detection"
    });



    const rubiksCube = new ItemBox(feed, {
        topic: "game-dev",
        title: "Rubik's Cube Simulation",
        imageUrl: "./images/rubiks-cube.png",
        itemLink: "./rubiks-cube-graphics",
        githubUrl: "https://github.com/tniyer2/rubiks-cube-graphics"
    });

    const flightSim = new ItemBox(feed, {
        topic: "game-dev",
        title: "Flight Simulator",
        imageUrl: "./images/flight-sim.png",
        itemLink: "./flight-simulator",
        githubUrl: "https://github.com/tniyer2/flight-simulator"
    });

    const hammerGame = new ItemBox(feed, {
        topic: "game-dev",
        title: "Hammer Game",
        imageUrl: "./images/hammer-game.png",
        itemLink: "./hammer-game",
        githubUrl: "https://github.com/tniyer2/hammer-game"
    });

    const snakeGame = new ItemBox(feed, {
        topic: "game-dev",
        title: "Snake Game",
        imageUrl: "./images/snake-game.jpeg",
        itemLink: "./snake",
        githubUrl: "https://github.com/tniyer2/snake"
    });

    const delaunayVoronoi = new ItemBox(feed, {
        topic: "game-dev",
        title: "Delaunay Triangulation",
        imageUrl: "./images/delaunay-voronoi.jpeg",
        githubUrl: "https://github.com/tniyer2/delaunay-voronoi"
    });

    const tEngine = new ItemBox(feed, {
        topic: "game-dev",
        title: "Basic C++ Game Engine",
        imageUrl: "./images/cplusplus.png",
        githubUrl: "https://github.com/tniyer2/t-engine"
    });

    const voxelsUnity = new ItemBox(feed, {
        topic: "game-dev",
        title: "Mesh to Voxels using Surface Net",
        imageUrl: "./images/voxels.png",
        githubUrl: "https://github.com/tniyer2/voxels"
    });

    const rustGraphics = new ItemBox(feed, {
        topic: "game-dev",
        title: "Vulkan in Rust",
        imageUrl: "./images/rust.png",
        githubUrl: "https://github.com/tniyer2/rust_engine"
    });

    const nimGraphics = new ItemBox(feed, {
        topic: "game-dev",
        title: "OpenGL in Nim",
        imageUrl: "./images/nim.png",
        githubUrl: "https://github.com/tniyer2/nim-graphics"
    });



    setTopic("general");
}

main();
