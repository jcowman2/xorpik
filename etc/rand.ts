import { Charsets, Game, onStartCommand } from "regal";

onStartCommand(game => {
    game.output.write(
        game.random.string(96, Charsets.ALHPANUMERIC_CHARSET + "+/")
    );
});

Game.init({ name: "rand", author: "lars" });

// tslint:disable-next-line:no-console
console.log(Game.postStartCommand().output.log[0].data);
