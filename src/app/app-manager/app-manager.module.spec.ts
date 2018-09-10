import { AppManagerModule } from './app-manager.module';

describe('AppManagerModule', () => {
  let appManagerModule: AppManagerModule;

  beforeEach(() => {
    appManagerModule = new AppManagerModule();
  });

  it('should create an instance', () => {
    expect(appManagerModule).toBeTruthy();
  });
});
