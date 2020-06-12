from py4web import action

@action("index")
@action.uses('index.html')
def index():
    return dict(
        title_text="ThreeJS Playground"
    )