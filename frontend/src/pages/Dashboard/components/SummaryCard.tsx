import {

    Card,

    CardContent,

    Typography,

    Box

} from "@mui/material";

import type { ReactNode } from "react";

interface SummaryCardProps {

    title: string;

    value: number;

    icon: ReactNode;

    color: string;

}

const SummaryCard = ({

    title,

    value,

    icon,

    color

}: SummaryCardProps) => {

    return (

        <Card

            elevation={5}

            sx={{

                borderRadius: 3,

                transition: "0.3s",

                "&:hover": {

                    transform: "translateY(-5px)",

                    boxShadow: 8

                }

            }}

        >

            <CardContent>

                <Box

                    display="flex"

                    justifyContent="space-between"

                    alignItems="center"

                >

                    <Box>

                        <Typography

                            color="text.secondary"

                            fontWeight={500}

                        >

                            {title}

                        </Typography>

                        <Typography

                            variant="h3"

                            fontWeight="bold"

                            mt={1}

                        >

                            {value}

                        </Typography>

                    </Box>

                    <Box

                        sx={{

                            bgcolor: color,

                            color: "#fff",

                            p: 2,

                            borderRadius: "50%"

                        }}

                    >

                        {icon}

                    </Box>

                </Box>

            </CardContent>

        </Card>

    );

};

export default SummaryCard;