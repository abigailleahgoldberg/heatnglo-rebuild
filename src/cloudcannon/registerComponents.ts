import { registerAstroComponent } from '@cloudcannon/editable-regions/astro';
import { componentMap } from './componentMap';

for (const [key, Component] of Object.entries(componentMap)) {
  registerAstroComponent(key, Component);
}
