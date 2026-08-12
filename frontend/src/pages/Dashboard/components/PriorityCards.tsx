import {
    Card,
    CardContent,
    Grid,
    Typography
} from "@mui/material";

interface Priority {

    priority: string;

    _count: {

        priority: number;

    };

}

interface Props {

    data: Priority[];

}

const getColor = (priority: string) => {

    switch (priority) {

        case "HIGH":
            return "#d32f2f";

        case "MEDIUM":
            return "#ed6c02";

        case "LOW":
            return "#2e7d32";

        default:
            return "#1976d2";

    }

};

const PriorityCards = ({ data }: Props) => {

    return (

        <>

            <Typography
                variant="h5"
                sx={{
                    mt: 5,
                    mb: 2,
                    fontWeight: "bold"
                }}
            >

                Task Priority

            </Typography>

            <Grid container spacing={3}>

                {

                    data.map((item) => (

                        <Grid
                            item
                            xs={12}
                            sm={4}
                            key={item.priority}
                        >

                            <Card
                                sx={{
                                    borderTop: `6px solid ${getColor(item.priority)}`
                                }}
                            >

                                <CardContent>

                                    <Typography
                                        color="text.secondary"
                                    >

                                        {item.priority}

                                    </Typography>

                                    <Typography
                                        variant="h4"
                                        fontWeight="bold"
                                    >

                                        {item._count.priority}

                                    </Typography>

                                </CardContent>

                            </Card>

                        </Grid>

                    ))

                }

            </Grid>

        </>

    );

};

export default PriorityCards;