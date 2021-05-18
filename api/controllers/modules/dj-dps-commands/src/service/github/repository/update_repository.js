let Promise = require("bluebird")
const GithubError = require("../gh_error")


module.exports = {
    name: "service.github.repos.update",

    synonims: {
    },

    "internal aliases": {
        "provider": "provider",
        // "selector": "query",
        // "filter": "query",
        // "sort": "sort",
        // "orderBy":"sort",
        // "aggregate": "aggregate",
        "owner": "owner",
        "repo": "repo",
        "name": "name",
        "description": "description",
        "homepage": "homepage",
        "private": "private",
        "visibility": "visibility",
        "has_issues": "has_issues",
        "has_projects": "has_projects",
        "has_wiki": "has_wiki",
        "is_template": "is_template",
        "default_branch": "default_branch",
        "allow_squash_merge": "allow_squash_merge",
        "allow_merge_commit": "allow_merge_commit",
        "allow_rebase_merge": "allow_rebase_merge",
        "delete_branch_on_merge": "delete_branch_on_merge",
        "archived": "archived"
    },

    defaultProperty: {
        // "service.mongodb": "query",
        // "service.mongodb.find": "query"
    },

    execute: function(command, state, config) {

        let gh = command.settings.provider
        let owner = command.settings.owner
        let repo = command.settings.repo
        let name = command.settings.name
        let description = command.settings.description
        let homepage = command.settings.homepage
        let private = command.settings.private
        let visibility = command.settings.visibility
        let has_issues = command.settings.has_issues
        let has_projects = command.settings.has_projects
        let has_wiki = command.settings.has_wiki
        let is_template = command.settings.is_template
        let default_branch = command.settings.default_branch
        let allow_squash_merge = command.settings.allow_squash_merge
        let allow_merge_commit = command.settings.allow_merge_commit
        let allow_rebase_merge = command.settings.allow_rebase_merge
        let delete_branch_on_merge = command.settings.delete_branch_on_merge
        let archived = command.settings.archived

        return new Promise((resolve, reject) => {

                gh.repos.update({
                  owner,
                  repo,
                  name,
                  description,
                  homepage,
                  private,
                  visibility,
                  has_issues,
                  has_projects,
                  has_wiki,
                  is_template,
                  default_branch,
                  allow_squash_merge,
                  allow_merge_commit,
                  allow_rebase_merge,
                  delete_branch_on_merge,
                  archived
                })
                    .then( response => {
                        state.head = {
                            type: "json",
                            data: response
                        }
                        resolve(state)
                    })
                    .catch ( e => {
                        reject(new GithubError(e.toString()))
                    })

        })
    },


    help: {
        synopsis: "Tokenize document",

        name: {
            "default": "rank",
            synonims: []
        },
        input: ["table"],
        output: "table",
        "default param": "indexes",
        params: [{
            name: "direction",
            synopsis: "Direction of iteration (optional)",
            type: ["Rows", "row", "Columns", "col"],
            synonims: ["direction", "dir", "for"],
            "default value": "Columns"
        }, {
            name: "indexes",
            synopsis: "Array of 0-based indexes of items that will be ranked (optional)",
            type: ["array of numbers"],
            synonims: ["indexes", "items"],
            "default value": []
        }, {
            name: "asc",
            synopsis: "Define order (optional)",
            type: ["A-Z", "az", "direct", "Z-A", "za", "inverse"],
            synonims: ["order", "as"],
            "default value": "A-Z"
        }],
        example: {
            description: "Rank first column values",
            code: "load(\r\n    ds:'47611d63-b230-11e6-8a1a-0f91ca29d77e_2016_02',\r\n    as:\"dataset\"\r\n)\r\nproj([\r\n  { dim:'time', role:'row', items:[] },\r\n  { dim:'indicator', role:'col', items:[] }\r\n])\r\n\r\nrank(for:\"col\",items:[0],as:\"az\")\r\n\r\norder(by:0, as:\"az\")\r\n\r\n"
        }
    }
}
