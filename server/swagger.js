/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * definition:
 *   Contact:
 *     properties:
 *       email:
 *         type: string
 *         format: email
 *       title:
 *         type: string
 *       message:
 *         type: string
 *   ContactResponse:
 *     properties:
 *       message:
 *         type: string
 *       status:
 *         type: number
 *   ErrorObject:
 *     properties:
 *       status:
 *         type: number
 *       error:
 *         type: string
 */


/**
 * @swagger
 * /contact:
 *   post:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */