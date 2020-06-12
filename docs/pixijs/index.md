## [Pixi](https://pixijs.download/dev/docs/PIXI.html)

### PIXI.Application
Creates the renderer, ticker, root container.

```js
const app = new PIXI.Application();
document.body.appendChild(app.view);
app.stage.addChild(PIXI.Sprite.from('something.png'));
```

### PIXI.Loader

### Stage a Pixi `Container` object
__Ways to create__
- from a single image file
- from a sub-image on a tileset
- texture atlas - a json file that defines the size and position of an image on a tileset

__Texture__ - A WebGL-ready 
`PIXI.utils.TextureCache["images/cat.png"];`
You can then use Pixi’s Sprite class to make a new sprite using the texture.
```js
let texture = PIXI.utils.TextureCache["images/anySpriteImage.png"];
let sprite = new PIXI.Sprite(texture);
```
__Actually load any kind of image__
```js
PIXI.loader.add("images/anyImage.png").load(setup);
```
__Creating a sprite__
```js
let sprite = new PIXI.Sprite(PIXI.loader.resources["images/anyImage.png"].texture);
```

__Full code reference__
```js
PIXI.loader.add("images/anyImage.png").load(setup);
function setup() {let sprite = new PIXI.Sprite(PIXI.loader.resources["images/anyImage.png"].texture)}
```

__Multiple files__
```js
PIXI.loader.add(["img/One.png","img/Two.png","img/Three.png"]).load(setup);
```

__Display__ - `app.stage.addChild(cat)`
__Remove from stage__ `app.stage.remoteChild(sprite)` or `sprite.visible = false`

__Mouse interactions__ [interactive](https://pixijs.download/dev/docs/PIXI.Container.html#interactive)
```js
app.stage.interactive = true; 
app.stage.on("pointermove", movePlayer); // pointerdown
```

__Preloading assets__
`app.loader.baseUrl = "images"`
`app.loader.add("name", "path")`
`app.loader.onProgress.add(showProgressFn)` .. `onComplete`
`app.loader.load` - to actually load
`player = Sprite.from(app.loader.resources.player.texture)`

__Ticker__ `app.ticker.add(gameLoop)`

__Intersection__ `el.getBounds()`

### How to's:
- change background color:
`app.renderer.backgroundColor = 0xf3f3f3;`
- scale `player.scale.set(2,2)`
- move - for keyboard press there's a ready func 