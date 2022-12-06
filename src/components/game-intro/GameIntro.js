import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function GameIntro() {
    return (
        <div className="start-intro apply-font">
            <Card>
                <CardContent>
                    <Typography className="apply-font" variant="h5" component="div">
                        Turing Test Game
                    </Typography>
                    <Typography component="span" className="start-introContent apply-font">
                        Turing Test Game to play with robot translators. All the Machine
                        Translation is from the National Research Council of Canada’s (NRC)
                        Multilingual Text Processing team. We have 3 non-player characters:
                        <div className="start-introContainer">
                            <div className="start-introItem">
                                Robot translators:
                                <ol>
                                    <li>
                                        Staty, aka Portage
                                        <ul>
                                            <li>NRC born and trained</li>
                                            <li>
                                                Translation habits:
                                                <ul>
                                                    <li>Disfluent</li>
                                                    <li>Frequently omitting words</li>
                                                    <li>Good at spelling</li>
                                                    <li>Good at copying names</li>
                                                    <li>No idea about agreement</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Neuro, aka Sockeye
                                        <ul>
                                            <li>Amazon born, NRC trained</li>
                                            <li>
                                                Translation habits:
                                                <ul>
                                                    <li>Fluent</li>
                                                    <li>Frequently hallucinating words</li>
                                                    <li>
                                                        Misspelling, especially in transliterated names
                                                    </li>
                                                    <li>Some ideas about range agreement</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>

                            <div className="start-introItem">
                                Robot Judge:
                                <ol>
                                    <li>
                                        YiSi
                                        <ul>
                                            <li>NRC born and trained</li>
                                            <li>
                                                World-leading robot judge in mimicking human judge
                                                competitions
                                            </li>
                                            <li>
                                                Judging rules:
                                                <ul>
                                                    <li>Giving scores to word meaning similarities</li>
                                                    <li>
                                                        Weighing content word similarities higher than
                                                        function word similarities
                                                    </li>
                                                    <li>
                                                        Grouping a few words together in their order to
                                                        judge fluency
                                                    </li>
                                                    <li>
                                                        Ruling the highest scoring suspect as human; the
                                                        second highest scoring one as Neuro and the lowest
                                                        scoring one as State
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <span style={{fontWeight: 'bold'}}>
                            As a player, your task is to choose on whether one translation is
                            generated by robot or not, mark/unmark the decision and click next
                            button to check the robot’s idea. Then view actual results,
                            compare player decision with the robot’s. Come and challenge the
                            robot!
                        </span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default GameIntro;
