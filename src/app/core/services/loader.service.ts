import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private renderer: Renderer2;

    constructor(private rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    addLoader() {
        this.renderer.addClass(document.body, 'isLoading');
    }

    removeLoader() {
        this.renderer.removeClass(document.body, 'isLoading');
    }

}
