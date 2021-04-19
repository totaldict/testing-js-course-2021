/** Storage for an issues. */
const IssuesDataStorage = class {
  /**
   * Create storage for an issues.
   * @param {Object} dataService - Data service for persist an issues.
   * @see LocalStorageDataService
   */
  constructor(dataService, issues = []) {
    this.dataService = dataService;
    this._issues = issues;
    // let _self = this;
    // this.dataService.loadEntities().then((data) => {
    //   _self._issues = data;
    // });
  }

  static async createElement(dataService) {
    const _issues = await this.load(dataService);
    return new IssuesDataStorage(dataService, _issues);
  }

  static async load(dataService){
    const result = await dataService.loadEntities();
    return result;
  }

  /**
   * List of loaded issues.
   * @type {Array<Object>}
   * @readonly
   */
  get issues() {
    return this._issues;
  }

  /**
   * Creates a new issue in storage and persist it.
   * @returns {boolean} True if new issue was successfully persisted, false otherwise.
   * @param {Object} issue - New issue to add.
   * @throws {Error} Issue must be an instance of Object.
   * @throws {Error} Issue must be specidied and have an `id` field.
   * @throws {Error} Issue must have unique value of `id` field.
   */
  createIssue(issue) {
    if (issue instanceof Object) {
      if (!issue || issue.id === undefined) {
        throw new Error(`Issue must be non-empty and have an id`);
      }

      if (this._issues.find(currentIssue => currentIssue.id === issue.id) !== undefined) {
        throw new Error(`Issue with id ${issue.id} us already exists`);
      }

      this._issues.push(issue);
      return this.dataService.addEntity(issue);
    }

    throw new Error('Issue must ba an object');
  }

  /**
   * Change value of specified field of issue with specified id and persist it.
   * @returns {boolean} True if changing issue was found and successfully persisted, false otherwise.
   * @param {*} id - Id of issue.
   * @param {string} key - Name of field whose value has to be changed.
   * @param {*} newValue - New value of specified field.
   * @throws {Error} Id of issue must be specified
   * @throws {Error} Key param must be specified
   */
  changeIssueFieldById(id, key, newValue) {
    if (!id) {
      throw new Error('Id should be passed to change issue');
    }
    if (!key) {
      throw new Error('Key should be passed to change issue');
    }
    const issueToChange = this._issues.find(issue => {
      return issue.id === id;
    });

    if (issueToChange !== undefined) {
      issueToChange[key] = newValue;
      return this.dataService.changeEntity(issueToChange);
    }

    return false;
  }

  /**
   * Delete issue with specified id and persist it.
   * @returns {boolean} True if deleting issue was found and successfully persisted, false otherwise.
   * @param {*} id - Id of issue.
   * @throws {Error} Id of issue must be specified
   */
  dateteIssueById(id) {
    if (!id) {
      throw new Error('Id should be passed th delete issue');
    }
    const indexOfIssueToDelete = this._issues.findIndex(issue => {
      return issue.id === id;
    });

    if (indexOfIssueToDelete > -1) {
      this._issues.splice(indexOfIssueToDelete, 1);
      return this.dataService.dateteEntityById(id);
    }

    return false;
  }
};

export default IssuesDataStorage;
