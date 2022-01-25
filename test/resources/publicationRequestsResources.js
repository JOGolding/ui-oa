const publicationRequest = {

    'id': '709ac8b2-3730-49ec-9332-06c28d82e0fd',
    'correspondences': [{
        'id': 'ae2a5736-048d-4cfd-b448-2f27631db31a',
        'correspondent': 'Test',
        'dateOfCorrespondence': '2021-12-30',
        'lastUpdated': '2021-12-30T16:51:34Z',
        'owner': {
            'id': 'db468f10-ab68-48ee-9cae-1acad0e89da7'
        },
        'mode': {
            'id': '8a8189847dc879fa017dc87a88500001',
            'value': 'email',
            'label': 'Email',
            'owner': {
                'id': '8a8189847dc879fa017dc87a88250000',
                'desc': 'Correspondence.Mode',
                'internal': true
            }
        },
        'category': {
            'id': '8a8189847dc879fa017dc87a88a40004',
            'value': 'invoice',
            'label': 'Invoice',
            'owner': {
                'id': '8a8189847dc879fa017dc87a88a10003',
                'desc': 'Correspondence.Category',
                'internal': true
            }
        },
        'content': 'Test Description',
        'status': {
            'id': '8a8189847dc879fa017dc87a88d00007',
            'value': 'awaiting_reply',
            'label': 'Awaiting Reply',
            'owner': {
                'id': '8a8189847dc879fa017dc87a88cc0006',
                'desc': 'Correspondence.Status',
                'internal': true
            }
        }
    },
    ],
    'publisher': {
        'id': '2c9180b07e6ade90017e6ae3bd130018',
        'value': 'publisher_1',
        'label': 'Publisher 1',
        'owner': {
            'id': '2c9180b07e6ade90017e6ae3bd0e0017',
            'desc': 'PublicationRequest.Publisher',
            'internal': false
        }
    },
    'dateCreated': '2022-01-18T10:05:21Z',
    'correspondingAuthor': {
        'id': 'bb6040e5-b574-4d99-97d5-c5d849c1ef64',
        'partyOwner': {
            'id': '7fc31e67-ee19-49ce-881b-de45935db7f4',
            'title': 'Dr',
            'mainEmail': 'Doug_Middleton2628@bulaffy.com',
            'fullName': 'Doug Middleton',
            'givenNames': 'Doug',
            'familyName': 'Middleton'
        },
        'role': {
            'id': '2c9180b07e6ade90017e6ae3bcb3000b'
        }
    },
    'lastUpdated': '2022-01-18T10:24:51Z',
    'requestDate': '2022-01-01',
    'doi': 'Test DOI',
    'publicationType': {
        'id': '2c9180b07e6ade90017e6ae3bd20001a',
        'value': 'journal_article',
        'label': 'Journal Article',
        'owner': {
            'id': '2c9180b07e6ade90017e6ae3bd1a0019',
            'desc': 'PublicationRequest.PublicationType',
            'internal': true
        }
    },
    'requestNumber': '1',
    'requestContact': {
        'id': '9f1d03c9-c479-496f-922d-16a5894b8a8c',
        'partyOwner': {
            'id': '7fc31e67-ee19-49ce-881b-de45935db7f4',
            'title': 'Dr',
            'mainEmail': 'Doug_Middleton2628@bulaffy.com',
            'fullName': 'Doug Middleton',
            'givenNames': 'Doug',
            'familyName': 'Middleton'
        },
        'role': {
            'id': '2c9180b07e6ade90017e6ae3bcbd000c'
        }
    },
    'license': {
        'id': '2c9180b07e6ade90017e6ae3bd31001d',
        'value': 'license_1',
        'label': 'License 1',
        'owner': {
            'id': '2c9180b07e6ade90017e6ae3bd2e001c',
            'desc': 'PublicationRequest.License',
            'internal': false
        }
    },
    'identifiers': [
        {
            'id': '1c78f224-fba5-4afe-a62f-98285c8bc622',
            'publicationIdentifier': 'Test Identifier',
            'type': {
                'id': '2c9180b07e6ade90017e6ae3bc720002',
                'value': 'pmid',
                'label': 'PMID',
                'owner': {
                    'id': '2c9180b07e6ade90017e6ae3bc010000',
                    'desc': 'PublicationIdentifier.Type',
                    'internal': false
                }
            },
            'owner': {
                'id': '709ac8b2-3730-49ec-9332-06c28d82e0fd'
            }
        }
    ],
    'publicationStatuses': [
        {
            'id': 'b883a28a-deb8-42cb-bb07-cd9b6c1769db',
            'publicationStatus': {
                'id': '2c9180b07e6ade90017e6ae3bc7f0004',
                'value': 'submitted',
                'label': 'Submitted',
                'owner': {
                    'id': '2c9180b07e6ade90017e6ae3bc7b0003',
                    'desc': 'PublicationStatus.PublicationStatus',
                    'internal': false
                }
            },
            'statusNote': 'Test Note 2',
            'owner': {
                'id': '709ac8b2-3730-49ec-9332-06c28d82e0fd'
            },
            'statusDate': '2022-01-02'
        },
        {
            'id': '80c92a66-43e8-40cc-be26-afadeb02128a',
            'publicationStatus': {
                'id': '2c9180b07e6ade90017e6ae3bc7f0004',
                'value': 'submitted',
                'label': 'Submitted',
                'owner': {
                    'id': '2c9180b07e6ade90017e6ae3bc7b0003',
                    'desc': 'PublicationStatus.PublicationStatus',
                    'internal': false
                }
            },
            'statusNote': 'Test Note',
            'owner': {
                'id': '709ac8b2-3730-49ec-9332-06c28d82e0fd'
            },
            'statusDate': '2022-01-01'
        }
    ],
    'withoutAgreement': false,
    'agreement': {
        'id': '8a8189b27e7315ee017e7739d6c60000',
        'owner': { id: '51d6bce3-6237-419c-8440-877f8cfd3c59' },
        'remoteId': '45c6cf86-363b-4ee4-8b99-d3082daf2f97',
        'remoteId_object': {
            'agreementStatus': { id: '8a81853f791989b00179198b17e00021', value: 'draft', label: 'Draft' },
            'cancellationDeadline': null,
            'dateCreated': '2021-11-16T11:40:35Z',
            'description': 'Imported from LAS:eR on Tue Nov 16 11:40:35 UTC 2021',
            'endDate': '2021-12-31',
            'id': '45c6cf86-363b-4ee4-8b99-d3082daf2f97',
            'lastUpdated': '2021-12-16T16:33:51Z',
            'localReference': 'subscription:fb3cfff1-a83b-4f54-8eb8-5a19bb07c8a8',
            'name': 'Bibliography of Asian Studies / BAS 2021',
            'startDate': '2021-01-01',

            'version': 3
        },
        'externalRequestIds': [],
    },
    'subtype': {
        'id': '2c9180b07e6ade90017e6ae3bd3b001f',
        'value': 'subtype_1',
        'label': 'Subtype 1',
        'owner': {
            'id': '2c9180b07e6ade90017e6ae3bd37001e',
            'desc': 'PublicationRequest.Subtype',
            'internal': false
        }
    },
    'history': [],
    'fundings': [
        {
            'id': 'c22e08b9-7cf7-475c-ac23-73ffa099c35b',
            'aspectFunded': {
                'id': '2c9180b07e6ade90017e6ae3bc980007',
                'value': 'publication',
                'label': 'Publication',
                'owner': {
                    'id': '2c9180b07e6ade90017e6ae3bc890005',
                    'desc': 'Funding.AspectFunded',
                    'internal': true
                }
            },
            'lastUpdated': '2022-01-18T10:24:51Z',
            'funder': {
                'id': '2c9180b07e6ade90017e6ae3bca60009',
                'value': 'funder_1',
                'label': 'Funder 1',
                'owner': {
                    'id': '2c9180b07e6ade90017e6ae3bca20008',
                    'desc': 'Funding.Funder',
                    'internal': false
                }
            },
            'owner': {
                'id': '709ac8b2-3730-49ec-9332-06c28d82e0fd'
            }
        },
        {
            'id': 'd8086d83-9dc1-4536-ace9-ee04c138b9bf',
            'aspectFunded': {
                'id': '2c9180b07e6ade90017e6ae3bc8e0006',
                'value': 'research',
                'label': 'Research',
                'owner': {
                    'id': '2c9180b07e6ade90017e6ae3bc890005',
                    'desc': 'Funding.AspectFunded',
                    'internal': true
                }
            },
            'lastUpdated': '2022-01-18T10:24:51Z',
            'funder': {
                'id': '2c9180b07e6ade90017e6ae3bca60009',
                'value': 'funder_1',
                'label': 'Funder 1',
                'owner': {
                    'id': '2c9180b07e6ade90017e6ae3bca20008',
                    'desc': 'Funding.Funder',
                    'internal': false
                }
            },
            'owner': {
                'id': '709ac8b2-3730-49ec-9332-06c28d82e0fd'
            }
        }
    ],
    'requestStatus': {
        'id': '2c9180b07e6ade90017e6ae3bd450021',
        'value': 'new',
        'label': 'New',
        'owner': {
            'id': '2c9180b07e6ade90017e6ae3bd420020',
            'desc': 'PublicationRequest.RequestStatus',
            'internal': true
        }
    },
    'publicationTitle': 'Test Publication',
    'authorNames': 'Test Author',
    'externalRequestIds': [
        {
            'id': '0520c9c8-d94d-47ab-8f22-b9396238ce07',
            'owner': {
                'id': '709ac8b2-3730-49ec-9332-06c28d82e0fd'
            },
            'externalId': 'Test 1'
        }
    ],
    'localReference': 'Test Reference',
    'publicationUrl': 'Test Url',
};

const handlers = {
    onClose: jest.fn(),
    onDelete: jest.fn(),
    onEdit: jest.fn(),
    onSubmit: jest.fn(),
};

export { publicationRequest, handlers };
