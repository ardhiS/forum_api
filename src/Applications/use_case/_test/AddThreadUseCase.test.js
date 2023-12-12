const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');
const NewThread = require('../../../Domains/threads/entities/NewThread');
const AddThreadUseCase = require('../AddThreadUseCase');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */

    // Arrange
    const mockThreadRepository = new ThreadRepository();
    const mockReturnedAddThread = new AddedThread({
      id: 'thread-123',
      title: 'title',
      owner: 'user-123',
    });

    mockThreadRepository.addThread = jest.fn(() =>
      Promise.resolve(mockReturnedAddThread)
    );

    const useCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });

    const useCasePayload = {
      title: 'this is title of thread',
      body: 'this is body of threa',
      owner: 'user-123',
    };

    const expectedAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'title',
      owner: 'user-123',
    });

    // Action
    const addedThread = await useCase.execute(useCasePayload);

    // Assert
    expect(addedThread).toEqual(expectedAddedThread);
    expect(mockThreadRepository.addThread).toBeCalledWith(useCasePayload);
  });
});
