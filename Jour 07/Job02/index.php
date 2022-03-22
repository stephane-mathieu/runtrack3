<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <title>Document</title>
</head>
<body>
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LPTF</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://laplateforme.io/">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Units</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Skills</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
<main>

        <section class="d-flex flex-column justify-content-around">
            <h1 class="fw-lighter text-center">LaPlateforme_</h1>
            <section class="d-flex justify-content-around">

                <div class="card" style="width: 18rem;">
                    <img src="papillon.jpg" class="card-img-top" alt="papillon">
                    <div class="card-body">
                        <h5 class="card-title">Un Papillon</h5>
                        <p class="card-text">Un papillon, c'est un peu comme une chenille, mais avec des ailes.<br />Ne pas ingérer.</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Commander votre propre papillon
                        </button>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Un Papillon</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Vous êtes sur le point d'acheter un papillon
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Confirmer</button>
                    </div>
                    </div>
                </div>
                </div>

                <div class="jumbotron alert-secondary  col-7">
                    <div class="container">
                        <h1 class="display-4">Bonjour, Monde!</h1>
                        <div id="text" class="lead p ">
                            Il existe plusieurs viesions du terme: <br>
                            Le monde est la matiére, l'espace et les phénomènes qui nous sont accessibles par les sens, l'experience ou la raison. <br>
                            Le sens le pluscourant désigne notre planète, la Terre, avec ses habitans, et son environnement plus ou moins naturel.
                        </div>
                        <hr class="my-4">
                        <p class="fw-bolder">Le sens étendu désigne l'univers dans son ensemble.</p>
                        <button type="button" id="button" class="btn bg-danger">Rebooter le monde</button>
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                        <div id="TableList"></div>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end mb-5">
                                <li class="page-item">
                                    <a id="previous" class="page-link" href="javascript:prevPage()" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li id="text1"class="page-item"><a class="page-link" href="#">1</a></li>
                                <li id="text2" class="page-item"><a class="page-link" href="#">2</a></li>
                                <li id="text3" class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a id="next" class="page-link" href="javascript:nextPage()" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Limbes</li>
                    <li class="list-group-item">Luxure</li>
                    <li class="list-group-item">Gourmandise</li>
                    <li class="list-group-item">Avarice</li>
                    <li class="list-group-item">Colère</li>
                    <li class="list-group-item">Heresie</li>
                    <li class="list-group-item">Violence</li>
                    <li class="list-group-item">Ruse et Tromperie</li>
                    <li class="list-group-item">Trahison</li>
                    <li class="list-group-item">Internet Explorer</li>
                </ul>
            </section>
            <section class="container d-flex flex-column justify-content-center col-6">
                <p class="fw-bolder mb-0 mt-4" style="margin-left: 76.6%;">Installation de AI 9000</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
                </div>
            </section>
            <section class="d-flex justify-content-around mt-3">
                <section>
                    <section class="d-flex flex-column justify-content-left w-60" >
                        <form>
                            <label class="form-label fw-bolder">Recevez votre copie gratuite d'internet 2!</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" placeholder="Login" aria-label="Login" aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Mot de Passe" aria-label="Mot de Passe" aria-describedby="basic-addon2">
                                <span class="input-group-text" id="basic-addon2">@example.com</span>
                            </div>

                            <label for="basic-url" class="form-label">URL des Internets 2 et 2.1 bêta</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text">DogeCoin</span>
                                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <span class="input-group-text">.00</span>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon3">https://l33t.lptf/dkwb/berlusconimkt/</span>
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                            </div>
                        </form>
                    </section>
                </section>
                <section>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </section>
            </section>
        </section>
</main>
</body>
</html>