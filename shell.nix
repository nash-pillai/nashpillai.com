with import <nixpkgs> {};
let unstable = import <unstable> {};
in pkgs.mkShell {
	buildInputs = [
		nodejs unstable.nodePackages.pnpm nodePackages.vercel
	];
}
