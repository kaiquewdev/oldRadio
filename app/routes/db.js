var mongoose = require('mongoose'),
    Db = exports;

var __schema__ = function ( scheme ) {
   return mongoose.Schema( scheme );
};

var __model__ = function ( db, name, schema ) {
    return db.model( name, schema );    
};

// Schemas
Db.schema = Schema = {};

Schema.station = function () {
    var scheme = {
        name: 'string',
        playlistId: 'objectId',
        live: 'bool'
    };

    return __schema__( scheme );
};

Schema.genre = function () {
    var scheme = {
        name: 'string'    
    };    

    return __schema__( scheme );
};

Schema.playlist = function () {
    var scheme = {
        name: 'string',
        musicIds: 'array',
        createdAt: 'date'
    };    

    return __schema__( scheme );
};

Schema.music = function () {
    var scheme = {
        name: 'string',
        genreId: 'objectId',
        details: 'string',
        data: 'buffer'
    };    
};

// Models
Db.model = Model = {};

Model.station = function ( db ) {
    return __model__( db, 'station', Schema.station() );    
};

Model.genre = function ( db ) {
    return __model__( db, 'genre', Schema.genre() );    
};

Model.playlist = function ( db ) {
    return __model__( db, 'playlist', Schema.playlsit() );    
};

Model.music = function ( db ) {
    return __model__( db, 'music', Schema.music() );    
};
