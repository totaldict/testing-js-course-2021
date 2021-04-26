import IssuesDataStorage from '../src/issues-data-storage';
import RestApiStorageDataService from '../src/rest-api-storage-data-service';

describe('issues-data-starage tests', () => {
  const id = 'testId';
  const issue = { id: id };

  xit('Add undefined Issue', () => {
    expect.assertions(1);

    const dataService = new RestApiStorageDataService('http://localhost:3000/issues');

    const issuesDataStarage = new IssuesDataStorage(dataService);
  
    expect(() => issuesDataStarage.createIssue(undefined)).toThrow(`Issue must ba an object`);;
  });

  xit('Check correct createIssue', async () => {
    const dataService = new RestApiStorageDataService('http://localhost:3000/issues');

    const issuesDataStarage = await IssuesDataStorage.createElement(dataService);
    issuesDataStarage.createIssue(issue);

    expect(issuesDataStarage.issues).toContain(issue);
  });
  
  xit('Check correct dateteIssueById', async () => {
    const dataService = new RestApiStorageDataService('http://localhost:3000/issues');

    const issuesDataStarage = await IssuesDataStorage.createElement(dataService);
    // Проверяем что искомый элемент на месте
    expect(issuesDataStarage.issues).not.toContain(issue);
    issuesDataStarage.dateteIssueById(id);
    // Проверяем что искомый элемент отсутствует
    expect(issuesDataStarage.issues).not.toContain(issue);
  });
})


