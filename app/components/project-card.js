import Ember from 'ember';

const {
  Component,
} = Ember;

/**
  `project-card` composes a card that contains the given project's description,
  skills, and contributing members.

  ## default usage

  ```Handlebars
  {{project-card project=project}}
  ```

  @class project-card
  @module Component
  @extends Ember.Component
 */
export default Component.extend({
  classNames: ['project-card'],

  projectCategories: Ember.computed.mapBy('project.projectCategories', 'category'),
  projectOrganizationMembers: Ember.computed.mapBy('project.organization.organizationMemberships', 'member'),
  projectSkills: Ember.computed.mapBy('project.projectSkills', 'skill')
});
