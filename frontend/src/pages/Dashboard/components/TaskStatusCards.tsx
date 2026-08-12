import {

    Card,

    CardContent,

    Grid,

    Typography

} from "@mui/material";

interface Status {

    status: string;

    _count: {

        status: number;

    };

}

interface Props {

    data: Status[];

}

const TaskStatusCards = ({

    data

}: Props) => {

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

                Task Status

            </Typography>

            <Grid container spacing={3}>

                {

                    data.map((item) => (

                        <Grid

                            size={{ xs: 12, sm: 4 }}

                            key={item.status}

                        >

                            <Card>

                                <CardContent>

                                    <Typography

                                        color="text.secondary"

                                    >

                                        {item.status.replace("_", " ")}

                                    </Typography>

                                    <Typography

                                        variant="h4"

                                        fontWeight="bold"

                                    >

                                        {item._count.status}

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

export default TaskStatusCards;