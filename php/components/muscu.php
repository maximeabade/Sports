<div id="muscu" class="container-fluid bg-simpleP" style="color:rgb(255, 255, 255)">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Muscu</h2><br>
                </div>
                <!--BOUTON POUR DÉROULER LE TABLEAU CONTENANT LES IMAGES DES boxe, LEUR PRIX, LEURS DÉTAILS ET SPÉCIFICITÉS, ET UN BOUTON D AJOUT AU PANIER -->
                <div class="col-sm-4">
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModalMuscu" onclick="muscuChilds()" >PROGRAMME DE MUSCU</button>
                    <!-- Modal -->
                    <div class="modal fade" id="myModalMuscu" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="myModalLabel"><strong>Muscu</strong></h1>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body" id="muscuContainer"></div>
                            </div>
                        </div>
                    </div>

                </div>
                    
            </div> 
        </div>
