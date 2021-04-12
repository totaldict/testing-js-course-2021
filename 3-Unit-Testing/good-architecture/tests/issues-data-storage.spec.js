import IssuesDataStorage from '../src/issues-data-storage'

describe('issues-data-starage tests', () => {

  it('Add undefined Issue', () => {
    const dataService = {
      addEntity: jest.fn(),
      loadEntities: jest.fn()
    };
    const issuesDataStarage = new IssuesDataStorage(dataService);
  
    expect(() => issuesDataStarage.createIssue(undefined)).toThrow(`Issue must ba an object`);;
  });

  it('Check correct createIssue', () => {
    const dataService = {};
    dataService.addEntity = jest.fn();
    const expectedIssues = [
      { id: 'id1' },
      { id: 'id2' },
    ]
    dataService.loadEntities = jest.fn().mockImplementation(() => expectedIssues);

    const issue = { id: 'test Id' };
    const issuesDataStarage = new IssuesDataStorage(dataService);
    issuesDataStarage.createIssue(issue);

    expect(dataService.addEntity.mock.calls[0][0]).toEqual(issue);
  });
  
  it('Check correct dateteIssueById', () => {
    const dataService = {};
    dataService.addEntity = jest.fn();
    dataService.dateteEntityById = jest.fn();
    const id = 'id2';
    dataService.loadEntities = () => [
      { id: 'id1' },
      { id },
    ]
    const issuesDataStarage = new IssuesDataStorage(dataService);
    issuesDataStarage.dateteIssueById(id);

    expect(dataService.dateteEntityById.mock.calls[0][0]).toEqual(id);
  });
})


