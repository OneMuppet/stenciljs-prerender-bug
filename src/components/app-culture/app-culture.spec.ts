import { render } from '@stencil/core/testing';
import { AppCulture } from './app-culture';

describe('app', () => {
  it('should build', () => {
    expect(new AppCulture()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppCulture],
        html: '<app-culture></app-culture>'
      });
    });
  });
});