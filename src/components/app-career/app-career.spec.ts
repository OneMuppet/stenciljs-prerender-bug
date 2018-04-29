import { render } from '@stencil/core/testing';
import { AppCareer } from './app-career';

describe('app', () => {
  it('should build', () => {
    expect(new AppCareer()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppCareer],
        html: '<app-home></app-home>'
      });
    });
  });
});