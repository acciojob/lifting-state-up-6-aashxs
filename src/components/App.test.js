import { mount } from '@cypress/react';
import App from '../src/components/App';

describe('Todo App', () => {
  beforeEach(() => {
    mount(<App />);
  });

  it('should mark a todo as completed when the complete button is clicked', () => {
    // Find the Complete button for the first todo and click it
    cy.get('button').first().click();

    // Now, the Complete button for the first todo should not be visible
    cy.get('button').first().should('not.be.visible');
  });
});