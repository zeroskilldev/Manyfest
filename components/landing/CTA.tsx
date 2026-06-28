import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

export const CTA = () => {
    return (
        <div>
            <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>
                    Hi there
                </CardTitle>
                <CardDescription>
                    des
                </CardDescription>
                <CardAction>
                    ac
                </CardAction>
                <CardContent>
                    con
                </CardContent>
                <CardFooter>
                    footer
                </CardFooter>
            </CardHeader>
            </Card>
        </div>
    )
}