import { _PORT } from './../_shared/utils'

export default new _PORT({
  name: 'injection',
  type: 'content',
  events: {
    ONEOFF: [
      'finished:restoration',
			'failed:restoration',
      'succeeded:restoration',
      'canceled:restoration',
      'failed:restore-range',
      'canceled:save-after-canceled-restoration',
      'copy:marks',
      'save:entry?',
      'update:entry?',
      'lookup:word',
      'error:browser-console',
      'changed:selection',
      'unsaved-changes',
      'clicked:mark',
      'activated:mark',
      'added:bookmark',
      'removed:bookmark',
      'added:note',
      'removed:last-note',
      'warn:mixed-entry-types',
      'warn:multiple-unlocked-entries',
      'page-state',
      'notes-state',
      'visually-ordered:marks'
    ]
  }
});
