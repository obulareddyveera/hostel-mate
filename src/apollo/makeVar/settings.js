import { makeVar } from '@apollo/client';

export const settings = makeVar({});
export const settingsField = {          
    read() {            
      return settings();          
  }
}