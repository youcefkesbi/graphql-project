let games = [
    { id: '1', title: 'Zelda.', platform: ['NES'] },
    { id: '2', title: 'The Legend of Zelda', platform: ['NES'] },
    { id: '3', title: 'Super Mario World', platform: ['NES'] },
    { id: '4', title: 'Super Mario Bros. 3', platform: ['NES'] },    
    { id: '5', title: 'Super Mario Bros. 2', platform: ['NES'] },
]

let authors = [
    { id: '1', name: 'John Doe', verified: true },
    { id: '2', name: 'Jane Doe', verified: false },
    { id: '3', name: 'Joe Doe', verified: true },
]

let reviews = [
    { id: '1', rating: 10, content: 'Great Game', author_id: '1', game_id: '1' },
    { id: '2', rating: 8, content: 'Pretty good', author_id: '2', game_id: '1' },
    { id: '3', rating: 7, content: 'Decent', author_id: '3', game_id: '1' },
    { id: '4', rating: 10, content: 'Great Game', author_id: '1', game_id: '2' },
    { id: '5', rating: 8, content: 'Pretty good', author_id: '2', game_id: '2' },
    { id: '6', rating: 7, content: 'Decent', author_id: '3', game_id: '2' },
    { id: '7', rating: 10, content: 'Great Game', author_id: '1', game_id: '3' }
]

export default { games, authors, reviews }