import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <div class="bg-blue-500 p-4">
  <h1 class="text-white">Welcome to LMS</h1>
</div>
    <router-outlet></router-outlet>
    `,
    styles: [],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'client';
}
