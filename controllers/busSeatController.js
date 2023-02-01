module.exports = {
    details: async(req, res) => {
        try {
            let data = {
                category: [
                    {
                        bus: {
                    
                        }
                    },
                    {
                        travel: {
                            lists: [
                                {
                                    id: 1,
                                    travel_name: 'Daytrans',
                                    price: 185000,
                                    total_left_seat: 8, 
                                    total_right_seat: 10,
                                    left_row_name: ['A', 'B'], 
                                    right_row_name: ['C', 'D'],
                                    from: 'Bandung', 
                                    to: 'Jakarta', 
                                    total_seat: 36,
                                    total_seat_booked: 6, 
                                    seat_booked: ["1A", "1C", "1D", "4A", "6D"]
                                }
                            ]
                        }
                    }
                ]    
            }

            res.status(200).send({
                isError: false, 
                message: 'Get Data Success!',
                data: [data]
            })
        } catch (error) {
            
        }
    }
}