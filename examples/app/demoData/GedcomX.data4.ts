export var GEDCOMX_DATA4: any ={
  "attribution" : {
    "contributor" : {
      "resource" : "#A-1"
    },
    "modified" : 1398405600000
  },
  "persons" : [ {
    "names" : [ {
      "nameForms" : [ {
        "fullText" : "Samuel Ham"
      } ]
    } ],
    "gender" : {
      "type" : "http://gedcomx.org/Male"
    },
    "facts" : [ {
      "type" : "http://gedcomx.org/Residence",
      "date" : {
        "original" : "3 November 1828",
        "formal" : "+1828-11-03"
      },
      "place" : {
        "original" : "parish of Honiton, Devon, England"
      }
    } ],
    "extracted" : true,
    "sources" : [ {
      "description" : "#S-2"
    } ],
    "id" : "P-1"
  }, {
    "names" : [ {
      "nameForms" : [ {
        "fullText" : "Elizabeth Spiller"
      } ]
    } ],
    "gender" : {
      "type" : "http://gedcomx.org/Female"
    },
    "facts" : [ {
      "type" : "http://gedcomx.org/Residence",
      "date" : {
        "original" : "3 November 1828",
        "formal" : "+1828-11-03"
      },
      "place" : {
        "original" : "parish of Wilton, Somerset, England"
      }
    } ],
    "extracted" : true,
    "sources" : [ {
      "description" : "#S-2"
    } ],
    "id" : "P-2"
  }, {
    "names" : [ {
      "nameForms" : [ {
        "fullText" : "Jno. Pain"
      } ]
    } ],
    "extracted" : true,
    "sources" : [ {
      "description" : "#S-2"
    } ],
    "id" : "P-3"
  }, {
    "names" : [ {
      "nameForms" : [ {
        "fullText" : "R.G. Halls"
      } ]
    } ],
    "extracted" : true,
    "sources" : [ {
      "description" : "#S-2"
    } ],
    "id" : "P-4"
  }, {
    "names" : [ {
      "nameForms" : [ {
        "fullText" : "Peggy Hammet"
      } ]
    } ],
    "extracted" : true,
    "sources" : [ {
      "description" : "#S-2"
    } ],
    "id" : "P-5"
  }, {
    "names" : [ {
      "nameForms" : [ {
        "fullText" : "David Smith Stone"
      } ]
    } ],
    "extracted" : true,
    "sources" : [ {
      "description" : "#S-2"
    } ],
    "id" : "P-6"
  }, {
    "evidence" : [ {
      "resource" : "#P-1"
    } ],
    "analysis" : {
      "resource" : "#D-2"
    },
    "id" : "C-1"
  } ],
  "relationships" : [ {
    "type" : "http://gedcomx.org/Couple",
    "extracted" : true,
    "facts" : [ {
      "type" : "http://gedcomx.org/Marriage",
      "date" : {
        "original" : "3 November 1828",
        "formal" : "+1828-11-03"
      },
      "place" : {
        "original" : "Wilton St George, Wilton, Somerset, England"
      }
    } ],
    "person1" : {
      "resource" : "#P-1"
    },
    "person2" : {
      "resource" : "#P-2"
    }
  } ],
  "sourceDescriptions" : [ {
    "description" : [ {
      "value" : "Marriage entry for Samuel Ham and Elizabeth in a copy of the registers of the baptisms, marriages, and burials at the church of St. George in the parish of Wilton : adjoining Taunton, in the county of Somerset from A.D. 1558 to A.D. 1837."
    } ],
    "resourceType" : "http://gedcomx.org/PhysicalArtifact",
    "citations" : [ {
      "value" : "Joseph Houghton Spencer, transcriber, Church of England, Parish Church of Wilton (Somerset). A copy of the registers of the baptisms, marriages, and burials at the church of St. George in the parish of Wilton : adjoining Taunton, in the county of Somerset from A.D. 1558 to A.D. 1837; Marriage entry for Samuel Ham and Elizabeth Spiller (3 November 1828), (Taunton: Barnicott, 1890), p. 224, No. 86."
    } ],
    "titles" : [ {
      "value" : "Marriage entry for Samuel Ham and Elizabeth Spiller, Parish Register, Wilton, Somerset, England"
    } ],
    "repository" : {
      "resource" : "#A-2"
    },
    "id" : "S-1"
  }, {
    "description" : [ {
      "value" : "Transcription of marriage entry for Samuel Ham and Elizabeth in a copy of the registers of the baptisms, marriages, and burials at the church of St. George in the parish of Wilton : adjoining Taunton, in the county of Somerset from A.D. 1558 to A.D. 1837."
    } ],
    "sources" : [ {
      "description" : "#S-1"
    } ],
    "resourceType" : "http://gedcomx.org/DigitalArtifact",
    "citations" : [ {
      "value" : "Joseph Houghton Spencer, transcriber, Church of England, Parish Church of Wilton (Somerset). A copy of the registers of the baptisms, marriages, and burials at the church of St. George in the parish of Wilton : adjoining Taunton, in the county of Somerset from A.D. 1558 to A.D. 1837; Marriage entry for Samuel Ham and Elizabeth Spiller (3 November 1828), (Taunton: Barnicott, 1890), p. 224, No. 86."
    } ],
    "about" : "#D-1",
    "titles" : [ {
      "value" : "Transcription of marriage entry for Samuel Ham and Elizabeth Spiller, Parish Register, Wilton, Somerset, England"
    } ],
    "id" : "S-2"
  } ],
  "agents" : [ {
    "names" : [ {
      "value" : "Jane Doe"
    } ],
    "emails" : [ {
      "resource" : "mailto:example@example.org"
    } ],
    "id" : "A-1"
  }, {
    "names" : [ {
      "value" : "Family History Library"
    } ],
    "addresses" : [ {
      "city" : "Salt Lake City",
      "stateOrProvince" : "Utah"
    } ],
    "id" : "A-2"
  } ],
  "events" : [ {
    "type" : "http://gedcomx.org/Marriage",
    "date" : {
      "original" : "3 November 1828",
      "formal" : "+1828-11-03"
    },
    "place" : {
      "original" : "Wilton St George, Wilton, Somerset, England"
    },
    "roles" : [ {
      "type" : "http://gedcomx.org/Principal",
      "person" : {
        "resource" : "#P-1"
      }
    }, {
      "type" : "http://gedcomx.org/Principal",
      "person" : {
        "resource" : "#P-2"
      }
    }, {
      "type" : "http://gedcomx.org/Witness",
      "person" : {
        "resource" : "#P-3"
      }
    }, {
      "type" : "http://gedcomx.org/Witness",
      "person" : {
        "resource" : "#P-4"
      }
    }, {
      "type" : "http://gedcomx.org/Witness",
      "person" : {
        "resource" : "#P-5"
      }
    }, {
      "type" : "http://gedcomx.org/Official",
      "person" : {
        "resource" : "#P-6"
      }
    } ],
    "extracted" : true,
    "id" : "E-1"
  } ],
  "documents" : [ {
    "type" : "http://gedcomx.org/Transcription",
    "text" : "Samuel Ham of the parish of Honiton and Elizabeth Spiller\nwere married this 3rd day of November 1828 by David Smith\nStone, Pl Curate,\nIn the Presence of\nJno Pain.\nR.G. Halls.  Peggy Hammet.\nNo. 86.",
    "sources" : [ {
      "description" : "#S-1"
    } ],
    "lang" : "en",
    "id" : "D-1"
  }, {
    "text" : "...Jane Doe's analysis document...",
    "id" : "D-2"
  } ]
};
