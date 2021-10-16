let ztxt = new Ztextify(".text-layers", {
    depth: "50px",
    layers: 80,
    fade: false,
    direction: "forwards",
    eventDirection: "reverse",
    event: "pointer",
    eventRotation: "35deg"
});

let emoji = new Ztextify(".emoji-layers", {
    depth: "50px",
    layers: 80,
    fade: false,
    direction: "forwards",
    eventDirection: "default",
    event: "pointer",
    eventRotation: "35deg"
});

let image = new Ztextify(".img-layers", {
    depth: "50px",
    layers: 200,
    fade: false,
    direction: "forwards",
    eventDirection: "default",
    event: "pointer",
    eventRotation: "35deg"
});