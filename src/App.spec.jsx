import { test, expect } from '@playwright/experimental-ct-react';
import App from './App'

//migrated test from react library to use playwright instead

test("First Test of the component", async ({mount}) => {
  const component = await mount(< App />);
  await expect(component).toContainText("Sign In");
  //extend with further app component tests below to check code prior to commit
  
});
