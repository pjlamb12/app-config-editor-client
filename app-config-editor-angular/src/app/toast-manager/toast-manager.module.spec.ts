import { ToastManagerModule } from './toast-manager.module';

describe('ToastManagerModule', () => {
  let toastManagerModule: ToastManagerModule;

  beforeEach(() => {
    toastManagerModule = new ToastManagerModule();
  });

  it('should create an instance', () => {
    expect(toastManagerModule).toBeTruthy();
  });
});
