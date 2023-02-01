module.exports = {
    getFormations: async(req, res) => {
        try {
            let data = {
                match_result: [
                    {
                        hometeam: {
                            name: 'Persib Bandung', 
                            rank: 1, 
                            formations: '3-4-2-1',
                            starting_lineup: ['Henhen', 'Igbonefo', 'Kuipers', 'Sato', 'Dedi', 'Aziz', 'Beckham', 'Frets', 'Ciro', 'Ezra'],
                            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Persib_Bandung_crest_with_stars.svg/1200px-Persib_Bandung_crest_with_stars.svg.png'
                        },
                        awayteam: {
                            name: 'Persija Jakarta', 
                            rank: 2, 
                            formations: '4-3-2-1',
                            starting_lineup: ['Ferrari', 'Kudela', 'Hansamu', 'Fahmi', 'Abimanyu', 'Resky', 'Firza A.', 'Riko', 'Krmencik', 'Behrens'],
                            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Lambang_Persija_Jakarta.svg/1200px-Lambang_Persija_Jakarta.svg.png' 
                        }
                    }
                ]
            }

            res.status(200).send({
                isError: false, 
                message: 'Get Data Success', 
                data: data
            })
        } catch (error) {
            
        }
    }
}