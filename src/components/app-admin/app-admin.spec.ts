import { render } from '@stencil/core/testing';
import { AppAdmin } from './app-admin';

describe('app', () => {
  it('should build', () => {
    expect(new AppAdmin()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppAdmin],
        html: '<app-admin></app-admin>'
      });
    });
  });
});